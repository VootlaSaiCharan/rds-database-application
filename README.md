# Installing Node.js, npm, and MySQL on Ubuntu

To install Node.js, npm, and MySQL on an Ubuntu machine, follow these steps:

1. **Update the package index**:
    - Open a terminal.
    - Run the following command:
      ```sh
      sudo apt update
      ```

2. **Install Node.js and npm**:
    - Run the following command to install Node.js and npm:
      ```sh
      sudo apt install -y nodejs npm
      ```

3. **Verify Node.js and npm Installation**:
    - Run the following commands to verify the installation:
      ```sh
      node -v
      npm -v
      ```
    - You should see the version numbers of Node.js and npm.

4. **Install MySQL**:
    - Run the following command to install MySQL:
      ```sh
      sudo apt install -y mysql-server
      ```

5. **Verify MySQL Installation**:
    - Run the following command to check the MySQL service status:
      ```sh
      sudo systemctl status mysql
      ```
    - You should see that the MySQL service is active and running.

Now you have Node.js, npm, and MySQL installed on your Ubuntu system.



## If You need to Install in Amazon Linux 
    - Alternatively, you can download and install the MySQL RPM file:
      ```sh
      sudo wget https://dev.mysql.com/get/mysql80-community-release-el9-1.noarch.rpm
      sudo dnf install mysql80-community-release-el9-1.noarch.rpm -y
      ```
    - You need the public key of MySQL to install the software:
      ```sh
      sudo rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2023
      ```
    - If you need to install the MySQL client:
      ```sh
      sudo dnf install mysql-community-client -y
      ```
    - If you need server:
    ```sh
    sudo dnf install mysql-community-server -y
    ```