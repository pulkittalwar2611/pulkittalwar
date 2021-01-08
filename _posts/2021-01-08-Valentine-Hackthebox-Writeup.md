---
title: Valentine Hackthebox Writeup
date: 2021-01-08 04:00:00 +0800
categories: [Hackthebox, Retired]
tags: [linux,ssl,ssl heartbleed,hex encode,tmux]     # TAG names should always be lowercase
image: /assets/img/valentine-hackthebox/valentine-pic.png
subtitle: JHBDOcubeoveiubo
---


# Introduction@Valentine:~$


Column | Details
------------ | -------------
Name | Valentine
IP | 10.10.10.79
Points | 20
Os | Linux
Difficult | Easy
Creator | [mrb3n](https://www.hackthebox.eu/profile/2984)
Out on | 7th October 2018

# Summary:~$

* Discovering the new host and scanning for open ports.
* Using `dirbuster` to detect hidden directories.
* Found `hype_key` which is hex encoded, decoding it we found id_rsa.
* `Port 443` is vulnerable to *Heartbleed* bug, which leaked the password for ssh login when used with id_rsa.
* `Exploited` **tmux** to gain Root.

# Starting:~$

## Nmap

I have used **nmapAutomator** , which keeps the scanning fast and reduces effort.*(Not recommended in real life scenarios).* 

Dowload link: [nmapAutomator](https://github.com/21y4d/nmapAutomator)

___
![](/assets/img/valentine-hackthebox/nmap-scan-1.png)

Basically `3 Ports` are open i.e. `22,80,443`. Both 443 and 80 shows the same content.

___
![](/assets/img/valentine-hackthebox/port-80-3.png)

Seeing this I thought of something related to a `heartbleed` bug, so I used `nmap` to check for that vulnerability.
**Command**: *nmap -T4 -p 80,443 -sV --script vuln 10.10.10.79*

___
![](/assets/img/valentine-hackthebox/ssl-bleed-114.png)

Port 443 is vulnerable to `heartbleed`, so I search for it and found [this](https://gist.github.com/eelsivart/10174134#file-heartbleed-py-L8). Ran the exploit few times and got a base64 encoded value.

___
![](/assets/img/valentine-hackthebox/got-text-17-new-exploit.png)

Decoding the value on an online tool, it shows `heartbleedbelievethehype`.

___
![](/assets/img/valentine-hackthebox/base64-18.png)

Moving further, let's do a directory search using `dirbuster`. **Wordlist Used**: *directory-list-2.3-medium.txt*

___
![](/assets/img/valentine-hackthebox/dirbuster-command-4.png)

Result:

___
![](/assets/img/valentine-hackthebox/dirbuster-new-result-8.png)

Accessing `http://10.10.10.79/dev/notes.txt` 

___
![](/assets/img/valentine-hackthebox/dev-notes-6.png)

Acessing `http://10.10.10.79/dev/hype_key`

___
![](/assets/img/valentine-hackthebox/hype-key-7.png)

This value seems to be `hex encoded`, let's decode it using `xxd` tool in kali.

**Command Used**: *cat hype_key | xxd -r -p > hype_key_encrypted*

___
![](/assets/img/valentine-hackthebox/id-rsa-downloaded-12.png)

We got id_rsa, giving it appropriate permissions and accessing `ssh`.

**Command**: *chmod 600 hype_key_encrypted*

**SSH Command**: *ssh -i hype_key_encrypted hype@10.10.10.79*

Username `hype` was pretty predictable from *hype_key*.

___
![](/assets/img/valentine-hackthebox/ssh-command-new-13.png)

It shows us a `password` prompt, let's enter *heartbleedbelievethehype* as password and get the user-flag.

___
![](/assets/img/valentine-hackthebox/user-flag-19.png)

For `Privilege Escalation`, I used [linpeas.sh](https://github.com/carlospolop/privilege-escalation-awesome-scripts-suite/tree/master/linPEAS).

___
![](/assets/img/valentine-hackthebox/something-phishy-linpeas-21.png)

I ran `/usr/bin/tmux -S /.devs/dev_sess` and directly got Root.

___
![](/assets/img/valentine-hackthebox/got-root-22.png)