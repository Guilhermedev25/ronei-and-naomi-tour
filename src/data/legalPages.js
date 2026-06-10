export const legalPages = [
  {
    slug: 'terms-of-use',
    title: 'Terms of Use',
    summary:
      'These terms explain how visitors and customers should use the Ronei and Naomi Tour website and our travel support services.',
    updatedAt: '4 June 2026',
    sections: [
      {
        title: 'About our service',
        content:
          'Ronei and Naomi Tour provides travel support, flight booking assistance and destination guidance. Information on this website is provided for general travel planning and service enquiries.',
      },
      {
        title: 'Using this website',
        content:
          'You agree to use this website lawfully and respectfully. You should not attempt to disrupt the website, submit false information, misuse forms or copy website content for commercial use without permission.',
      },
      {
        title: 'Travel information',
        content:
          'Flight prices, routes, baggage rules, schedules, airline policies and entry requirements can change without notice. We will use reasonable care when helping you review options, but final travel conditions are set by airlines, airports and government authorities.',
      },
      {
        title: 'Passports, visas and entry rules',
        content:
          'Customers are responsible for checking passport validity, visa requirements, transit rules, vaccination requirements and government travel advice before travelling.',
      },
      {
        title: 'Supplier and ATOL information',
        content:
          'Where travel is supplied by an airline, tour operator or travel supplier, their own terms may apply. If a booking is ATOL protected or arranged through an ATOL holder, the relevant ATOL information should be provided with the booking documents.',
      },
      {
        title: 'Bookings and payments',
        content:
          'Before any booking is confirmed, customers should review passenger details, travel dates, fares, airline rules, payment terms and cancellation conditions. A booking may only be treated as confirmed after the required payment is received and confirmation is issued.',
      },
      {
        title: 'Limitation of responsibility',
        content:
          'We are not responsible for losses caused by incorrect customer details, expired documents, visa issues, airline disruption, weather, strikes, border decisions or other events outside our reasonable control.',
      },
      {
        title: 'Contact',
        content:
          'For questions about these terms, contact us by WhatsApp on +44 7983 512153 or by email at contact@roneiandnaomitour.com.',
      },
    ],
  },
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    summary:
      'This policy explains what personal information we may collect when you contact us and how we use it to support your travel enquiry.',
    updatedAt: '4 June 2026',
    sections: [
      {
        title: 'Information we collect',
        content:
          'We may collect your name, email address, phone number, destination interests, travel dates, passenger details and any message you choose to send through the website, WhatsApp, email or social media.',
      },
      {
        title: 'Who controls your information',
        content:
          'Ronei and Naomi Tour is responsible for the personal information collected directly through this website and through our customer contact channels.',
      },
      {
        title: 'How we use information',
        content:
          'We use your information to respond to enquiries, prepare travel options, support bookings, communicate updates, manage customer service and keep basic business records.',
      },
      {
        title: 'Lawful basis',
        content:
          'We usually process customer information because it is needed to respond to enquiries, prepare or manage travel arrangements, meet legal obligations or support our legitimate business interests in providing customer service.',
      },
      {
        title: 'Sharing information',
        content:
          'Where needed for your travel request, we may share relevant information with airlines, travel suppliers, payment providers or service partners. We do not sell personal information.',
      },
      {
        title: 'International travel suppliers',
        content:
          'Because travel services are international, relevant booking information may be shared with suppliers or authorities outside the United Kingdom where this is needed for your trip.',
      },
      {
        title: 'WhatsApp and social platforms',
        content:
          'If you contact us through WhatsApp, Instagram or Facebook, those platforms may process your information under their own privacy policies. Please review their terms if you use those channels.',
      },
      {
        title: 'Data retention',
        content:
          'We keep customer information only for as long as reasonably needed for enquiries, bookings, legal obligations, accounting and customer support.',
      },
      {
        title: 'Your choices',
        content:
          'You can ask us to access, update, correct or delete your personal information where applicable. You may also object to certain processing or ask us to restrict how we use your information.',
      },
      {
        title: 'Questions or complaints',
        content:
          'Contact us at contact@roneiandnaomitour.com for privacy requests. If you are in the UK, you can also raise data protection concerns with the Information Commissioner’s Office.',
      },
    ],
  },
  {
    slug: 'cancellation-policy',
    title: 'Cancellation Policy',
    summary:
      'This policy explains how cancellations, refunds and booking changes are handled for travel support and flight bookings.',
    updatedAt: '4 June 2026',
    sections: [
      {
        title: 'Airline and supplier rules',
        content:
          'Cancellation and refund options depend on the fare type, airline rules, ticket conditions and supplier policies that apply to your booking. Some fares may be non-refundable or may include change fees.',
      },
      {
        title: 'Package travel',
        content:
          'If your booking is sold as a package holiday, package travel rules and the organiser’s terms may apply. Where a package holiday refund is legally due, the organiser’s statutory refund obligations and timeframes may apply.',
      },
      {
        title: 'Before booking',
        content:
          'Customers should review the cancellation, refund and change conditions before confirming a booking. We will highlight important conditions where possible, but airline and supplier terms remain the controlling rules.',
      },
      {
        title: 'Fair cancellation fees',
        content:
          'Cancellation fees should reflect the applicable booking terms and supplier rules and should not be excessive. A term that says no refund is available in every circumstance may be unfair and may not be enforceable.',
      },
      {
        title: 'Requesting a cancellation',
        content:
          'To request a cancellation, contact us as soon as possible by WhatsApp or email with your booking details. We will review the applicable rules and explain the available options.',
      },
      {
        title: 'Refund timing',
        content:
          'When a refund is available, timing depends on the airline, supplier, payment method and processing requirements. Refunds may take several business days or longer after supplier approval.',
      },
      {
        title: 'Changes and rebooking',
        content:
          'Flight changes may be subject to airline availability, fare differences, taxes and service fees. We will help compare practical rebooking options when your plans change.',
      },
      {
        title: 'Service fees',
        content:
          'Any service fee charged for planning, support or booking assistance may be separate from airline charges and may not be refundable unless agreed in writing.',
      },
    ],
  },
];

export const legalPageMap = Object.fromEntries(legalPages.map((page) => [page.slug, page]));
