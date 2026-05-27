# 📧 EmailJS Setup Guide — Contact Form Email

EmailJS se contact form directly tumhari Gmail pe email bhejta hai.
**Koi backend, koi server nahi chahiye!**

---

## Step 1 — EmailJS Account Banao (FREE)

1. Jao: **https://www.emailjs.com**
2. **Sign Up** karo — FREE plan mein **200 emails/month** milte hain
3. Email se confirm karo

---

## Step 2 — Email Service Connect Karo

1. Dashboard mein jao → **Email Services** → **Add New Service**
2. **Gmail** select karo
3. **Connect Account** par click karo → Apni Gmail se login karo
   - Jis Gmail pe emails receive karni hain woh use karo
   - Example: `rajputsourabh2505@gmail.com`
4. **Create Service** karo
5. **Service ID** copy karo → Example: `service_abc123`
   - ⚠️ Yeh ID save karo — baad mein chahiye

---

## Step 3 — Email Template Banao

1. Dashboard mein → **Email Templates** → **Create New Template**
2. Template kuch aisa banao:

**Subject:**
```
New Portfolio Message from {{name}}
```

**Body:**
```
You have a new message from your portfolio website!

Name:    {{name}}
Email:   {{email}}

Message:
{{message}}

---
Sent from: Sourabh Rajput Portfolio
```

3. **To Email** field mein apni email daalo: `rajputsourabh2505@gmail.com`
4. **Save** karo
5. **Template ID** copy karo → Example: `template_xyz789`

---

## Step 4 — Public Key Lao

1. Dashboard mein → **Account** (top right) → **General**
2. **Public Key** copy karo → Example: `abc123XYZ_your_key`

---

## Step 5 — Keys Portfolio Mein Daalo

`src/components/Contact.jsx` file open karo aur top mein yeh lines update karo:

```js
// PEHLE (before):
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'

// BAAD MEIN (after) - apni actual keys daalo:
const EMAILJS_SERVICE_ID  = 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'abc123XYZ_your_key'
```

---

## Step 6 — Test Karo

1. `npm run dev` se portfolio start karo
2. Contact section mein jao
3. Form bharo aur **Send Message** karo
4. Tumhari Gmail check karo — email aa jaegi! ✅

---

## ✅ Resume Download Setup

Resume download ke liye **koi backend nahi chahiye**:

1. Apna resume PDF rename karo: `Sourabh_Rajput_Resume.pdf`
2. Is folder mein rakhao: `public/Sourabh_Rajput_Resume.pdf`

```
portfolio-frontend/
└── public/
    ├── profile.jpg              ← Profile photo
    └── Sourabh_Rajput_Resume.pdf  ← Resume PDF
```

Bas! Download button automatically kaam karega.

---

## 🚀 Project Run Karne ke Steps

```bash
# 1. Dependencies install karo
npm install

# 2. Dev server start karo
npm run dev

# 3. Browser mein open karo
http://localhost:5173
```

---

## ❓ Common Problems

**Email nahi aa rahi?**
- EmailJS dashboard mein Service ID, Template ID, Public Key double-check karo
- Gmail "Less secure apps" allow karo ya App Password use karo
- EmailJS dashboard → Email Logs mein dekho error kya hai

**Resume download nahi ho raha?**
- File ka naam exactly `Sourabh_Rajput_Resume.pdf` hona chahiye
- `public/` folder mein hona chahiye (src ke andar nahi)

**Profile image nahi dikh rahi?**
- File: `public/profile.jpg`
- `Hero.jsx` mein img tag uncomment karo
