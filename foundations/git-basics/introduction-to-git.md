# Introduction to Git

## Getting Started About Version ----------

### About Version Control

**Version control** is a system that records changes to a file or set of
files over time so that you can recall specific versions later.

A **Version Control System** allows you to revert selected files back to a
previous state, revert the entire project back to a previous state, compare
changes over time, see who last modified something that might be causing a
problem, who introduced an issue and when, and more.

#### Local Version Control Systems

**RCS** works by keeping pat ch sets in a special format on disk; it can then
re-create what any file looked like at any point in time by adding up
all the patches.

#### Centralized Version Control Systems

**CVCSs** were developed to deal with the problem that people need to
collaborate with developers on other systems.

It's far easier to administer a CVCS than it is to deal with local
databases on every client.

However, this setup also has some serious downsides. The most obvious
is the single point of failure that the centralized server represents.

#### Distributed Version Control Systems

In a **DVCS**, clients don't just checkout the latest snapshot of the
files; rather, they fully mirror the repository, including its full history.

## A Short History of Git

## What is Git?

### Snapshots, Not Differences

The major difference between Git and any other VCS is the way Git think about
its data.

Git thinks of its data more like a series of snapshots of a miniature filesystem
in contrary to a list of file-based changes.

### Nearly Every Operation Is Local

Most operations in Git need only local files and resources to operate.

### Git Has Integrity

Everything is Git is checksummed before it is stored and is then referred to by
that checksum. This means it's impossible to change the contents of any file or
directory without Git knowing about it.

### Git Generally Only Adds Data

When you do actions in Git, nearly all of them only **add** data to the Git database.

### The Three States

**Modified** means that you have changed the file but have not committed it to
your database yet.

**Staged** means that you have marked a modified file in its current version
to go into your next commit snapshot.

**Committed** means that the data is safely stored in your local database.

**The working tree** is a single checkout of one version of the project.

**The staging area** is a file, generally contained in your Git directory, that
stores information about what will go into your next commit.

**The Git directory** is where Git stores the metadata and object database for
your project.

## The Command Line

The command line is the only place you can run **all** Git commands.
