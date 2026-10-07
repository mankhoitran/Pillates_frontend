import { CustomerBooking, INITIAL_CUSTOMER_BOOKINGS } from '../data/studioData';

const STORAGE_KEY = 'hp_studio_customer_bookings';

export function getStoredBookings(): CustomerBooking[] {
  if (typeof window === 'undefined') return INITIAL_CUSTOMER_BOOKINGS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_CUSTOMER_BOOKINGS));
      return INITIAL_CUSTOMER_BOOKINGS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return INITIAL_CUSTOMER_BOOKINGS;
  } catch (e) {
    console.error('Failed to load bookings from storage', e);
    return INITIAL_CUSTOMER_BOOKINGS;
  }
}

export function saveBooking(booking: Omit<CustomerBooking, 'id' | 'bookingCode'>): CustomerBooking {
  const allBookings = getStoredBookings();
  const code = `HP-${Math.floor(100000 + Math.random() * 900000)}`;
  const newBooking: CustomerBooking = {
    ...booking,
    id: `bk-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    bookingCode: code,
  };

  const updated = [newBooking, ...allBookings];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save booking', e);
  }
  return newBooking;
}

export function cancelBooking(bookingId: string): boolean {
  const allBookings = getStoredBookings();
  const updated = allBookings.filter((b) => b.id !== bookingId);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return true;
  } catch (e) {
    console.error('Failed to cancel booking', e);
    return false;
  }
}

export function findBookingsByCustomer(identifier: string): CustomerBooking[] {
  if (!identifier || !identifier.trim()) return [];
  const cleanQuery = identifier.trim().toLowerCase();
  const cleanDigitsOnly = identifier.replace(/\D/g, '');
  const all = getStoredBookings();

  return all.filter((b) => {
    const emailMatch = b.customerEmail.toLowerCase().includes(cleanQuery);
    const nameMatch = b.customerName.toLowerCase().includes(cleanQuery);
    const phoneDigits = b.customerPhone.replace(/\D/g, '');
    const phoneMatch =
      cleanDigitsOnly.length >= 3 &&
      (phoneDigits.includes(cleanDigitsOnly) || cleanDigitsOnly.includes(phoneDigits));
    const codeMatch = b.bookingCode.toLowerCase().includes(cleanQuery);

    return emailMatch || phoneMatch || nameMatch || codeMatch;
  });
}
