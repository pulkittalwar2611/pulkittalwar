---
title: Ready Hackthebox Writeup
date: 2020-12-17 09:00:00 +0800
categories: [Hackthebox, Active]
tags: []     # TAG names should always be lowercase
image: /assets/img/ready-hackthebox/ready-pic.jpg
subtitle: JHBDOcubeoveiubo
---


# Introduction@Luanne:~$


Column | Details
------------ | -------------
Name | Ready
IP | 10.10.10.220
Points | 30
Os | Linux
Difficult | Medium
Creator | [bertolis](https://app.hackthebox.eu/users/27897)
Out on | 28th November 2020

# Summary:~$

* Discovering the new host and scanning for open ports.
* Logging in `Port 5080`, which is a `gitlab` signup/signin page.
* Checking the gitlab version, which is `11.4.7`
* Looking for vulnerabilities for that version, found `SSRF - redis - RCE` in gitlab 11.4.7.
* Exploiting the `vulnerability` and getting the `reverse shell`.
* For `Privilege escalation`, found a password file and logged in as `root` in the container.
* **Mounting** the drives present in `/dev` of the container, to get the `Root Flag`.
