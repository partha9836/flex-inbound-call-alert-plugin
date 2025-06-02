# 📞 Flex Inbound Call Alert Plugin

A custom Twilio Flex plugin that plays a sound alert for inbound voice calls. This helps agents get notified audibly when new calls arrive, reducing the risk of missed customer interactions.


## 🎯 Objective

This plugin notifies Flex agents about incoming **inbound voice calls** using a browser-based audio alert. It plays a looping sound until the agent accepts, rejects, or the reservation times out.

---

## 🧰 Product

- **Twilio Flex**
- **Flex Plugin CLI**

---

## 🔐 User Permissions

Anyone with access to deploy plugins using the Twilio CLI can use this plugin:

- Flex Admins  
- Developers with proper permissions  

You’ll need access to:
- Your Twilio Flex project  
- The ability to deploy and release plugins via the CLI

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/flex-inbound-call-alert-plugin.git
cd flex-inbound-call-alert-plugin
```

###2. Install Dependencies

```bash
npm install
```
3. Start the Plugin Locally

```bash
twilio flex:plugins:start
```

This runs the plugin in your browser for testing.

4. Deploy the Plugin
   
Once you're happy with your changes:

```bash
twilio flex:plugins:deploy --major --changelog "Initial deploy of inbound call alert plugin"
```

5. Release the Plugin

```bash
twilio flex:plugins:release --plugin flex-inbound-call-alert-plugin@1.0.0 --name "Inbound Call Alert"
```
