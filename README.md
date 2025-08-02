
# 🚀 Final Deployment Guide: Vite + PM2 + Nginx on Ubuntu

This guide documents how to deploy a Vite application on an Ubuntu server using **PM2** as a process manager and **Nginx** as a reverse proxy.

---

## 📦 Step 1: Build the Vite App

From the root of your project:

```bash
npm install       # Install all dependencies
npm run build     # Build the app into the dist/ folder
```

---

## 🔁 Step 2: Serve the App on Port 5000 Using PM2

### Install `serve` globally (if not already installed):

```bash
npm install -g serve
```

### Install and start PM2:

```bash
sudo npm install -g pm2
pm2 start "serve -s dist -l 5000" --name nishan-it
```

### Verify the process is running:

```bash
pm2 list
```

### Optional: Keep PM2 process running after reboot:

```bash
pm2 startup
# Follow the output (copy and paste the suggested command)
pm2 save
```

---

## 🌐 Step 3: Install Nginx

```bash
sudo apt update
sudo apt install nginx -y
```

---

## ⚙️ Step 4: Create Nginx Configuration

Create a new configuration file:

```bash
sudo nano /etc/nginx/sites-available/nishan-it
```

Paste the following into the file:

```nginx
server {
    listen 80;
    server_name yourdomain.com;  # Replace with your domain or server IP

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🔗 Step 5: Enable the Nginx Site

```bash
sudo ln -s /etc/nginx/sites-available/nishan-it /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default  # optional
```

---

## ✅ Step 6: Test and Reload Nginx

```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## 🌍 Step 7: Access Your Live Website

Open your browser and navigate to:

```
http://<your-server-ip>
```
or

```
http://yourdomain.com
```

---

## 📁 Project Structure

```
your-project/
├── dist/               # Compiled output from Vite
├── public/
├── src/
├── package.json
└── README.md
```

---

## 🔐 Tips for Production

- Use HTTPS (Let's Encrypt + Certbot)
- Restrict Nginx access by IP (for admin endpoints)
- Enable firewall: `ufw allow 'Nginx Full'`
- Monitor with PM2 dashboard: `pm2 monit`

---

## 🛠️ Technologies Used

- [Vite](https://vitejs.dev/)
- [PM2](https://pm2.keymetrics.io/)
- [Nginx](https://nginx.org/)
- [Ubuntu Server](https://ubuntu.com/)

---

## 📜 License

MIT License
