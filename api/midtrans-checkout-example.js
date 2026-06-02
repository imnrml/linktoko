/*
  Example serverless endpoint for Midtrans Snap.
  Do not expose MIDTRANS_SERVER_KEY in frontend code.
  Required environment variables:
  - MIDTRANS_SERVER_KEY
  - MIDTRANS_IS_PRODUCTION=false or true
*/

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { planName, amount, buyerName, buyerEmail } = req.body || {};

  if (!planName || !amount) {
    return res.status(400).json({ error: 'planName and amount are required' });
  }

  const isProduction = process.env.MIDTRANS_IS_PRODUCTION === 'true';
  const snapUrl = isProduction
    ? 'https://app.midtrans.com/snap/v1/transactions'
    : 'https://app.sandbox.midtrans.com/snap/v1/transactions';

  const auth = Buffer.from(`${process.env.MIDTRANS_SERVER_KEY}:`).toString('base64');
  const orderId = `LINKTOKO-${Date.now()}`;

  const payload = {
    transaction_details: {
      order_id: orderId,
      gross_amount: Number(amount)
    },
    item_details: [
      {
        id: planName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        price: Number(amount),
        quantity: 1,
        name: planName
      }
    ],
    customer_details: {
      first_name: buyerName || 'Pembeli LinkToko',
      email: buyerEmail || 'buyer@example.com'
    }
  };

  const response = await fetch(snapUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();
  if (!response.ok) {
    return res.status(response.status).json(data);
  }

  return res.status(200).json({
    orderId,
    token: data.token,
    redirectUrl: data.redirect_url
  });
}
