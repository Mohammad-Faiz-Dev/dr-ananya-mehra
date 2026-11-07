import { NextResponse } from 'next/server';

const treatments = ['Heart Check-up', 'ECG & Echo', 'Hypertension', 'Heart Failure', 'Preventive Cardiology', 'Second Opinion'];
const demoSlots = ['9:00 AM', '10:30 AM', '12:00 PM', '3:00 PM', '4:30 PM', '5:30 PM'];

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || ''));
}
function isValidPhone(v) {
  const digits = String(v || '').replace(/[\s\-+()]/g, '');
  return digits.length >= 8 && digits.length <= 15;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, treatment, date, time } = body || {};

    const errors = {};
    if (!name || !String(name).trim()) errors.name = 'Name is required';
    if (!email || !isValidEmail(email)) errors.email = 'Valid email is required';
    if (!phone || !isValidPhone(phone)) errors.phone = 'Valid phone is required';
    if (!treatments.includes(treatment)) errors.treatment = 'Invalid consultation type';
    if (!date) errors.date = 'Date is required';
    else {
      const d = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (isNaN(d.getTime()) || d < today) errors.date = 'Please choose a future date';
    }
    if (!demoSlots.includes(time)) errors.time = 'Please select a valid time slot';

    if (Object.keys(errors).length) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    const reference = 'DEMO-' + Math.random().toString(36).slice(2, 8).toUpperCase();

    return NextResponse.json({
      ok: true,
      reference,
      message: 'Demo request received. No appointment has been booked or sent.',
      preview: { name, email, phone, treatment, date, time },
    });
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }
}
