interface DiscordWebhookData {
  timezone: string;
  country: string;
  product: string;
  paymentMethod: string;
  paid: boolean;
}

const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1385407433605779638/xS49AvLzF_mscpY7Ou265hvwpD9saQDXNTFSqxYHzXsibo3pCA43JTQOUg-Z1hgcVyTV';

export const sendDiscordNotification = async (data: DiscordWebhookData) => {
  try {
    const embed = {
      title: '💳 New Purchase Attempt',
      color: data.paid ? 0x00ff00 : 0xff0000, // Green if paid, red if not
      fields: [
        {
          name: '🌍 Timezone',
          value: data.timezone,
          inline: true
        },
        {
          name: '🏳️ Country',
          value: data.country,
          inline: true
        },
        {
          name: '📦 Product',
          value: data.product,
          inline: true
        },
        {
          name: '💳 Payment Method',
          value: data.paymentMethod,
          inline: true
        },
        {
          name: '✅ Paid',
          value: data.paid ? 'Yes' : 'No',
          inline: true
        }
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: 'CS2 Configs Pro'
      }
    };

    const payload = {
      embeds: [embed]
    };

    await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error('Failed to send Discord notification:', error);
    // Don't throw error to avoid breaking the main flow
  }
};

export const getLocationInfo = async (): Promise<{ timezone: string; country: string }> => {
  try {
    // Get timezone from browser
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    // Try to get country from IP
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    return {
      timezone,
      country: data.country_name || 'Unknown'
    };
  } catch (error) {
    console.error('Failed to get location info:', error);
    return {
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      country: 'Unknown'
    };
  }
};