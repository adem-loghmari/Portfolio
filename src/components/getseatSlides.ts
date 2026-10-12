import type { Slide } from "./ui/ImageModal";
import createEvent from "./assets/getseat/create-event.mp4";
import venueBuilder from "./assets/getseat/venue-builder.mp4";
import sessions from "./assets/getseat/sessions.mp4";
import publishSync from "./assets/getseat/publish-sync.mp4";
import paymentSetup from "./assets/getseat/payment-setup.mp4";
import guestPortal from "./assets/getseat/guest-portal.mp4";
import realtimeLocking from "./assets/getseat/realtime-locking.mp4";
import payment from "./assets/getseat/payment.mp4";
import ticket from "./assets/getseat/ticket.mp4";
import qrScan from "./assets/getseat/qr-scan.mp4";
import dashboard from "./assets/getseat/dashboard.mp4";
import venueBuilderImg from "./assets/getseat/venue-builder.png";
import guestPortalImg from "./assets/getseat/guest-portal.png";
import sdkDocsImg from "./assets/getseat/sdk-docs.png";
import getseat1 from "./assets/getseat-1.png";
import getseat2 from "./assets/getseat-2.png";
import getseat3 from "./assets/getseat-3.png";
import getseat4 from "./assets/getseat-4.png";
import getseat5 from "./assets/getseat-5.png";

// Ordered as the product flow: organizer setup, guest purchase, door, analytics, SDK.
export const getseatSlides: Slide[] = [
  { src: createEvent, kind: "video", caption: "Create an event: the organizer starts from a new event." },
  { src: venueBuilderImg, caption: "Venue builder: a drag-and-drop stadium editor with seat categories and pricing." },
  { src: venueBuilder, kind: "video", caption: "Draw the venue seat by seat on a 60 FPS canvas with 1,000+ shapes." },
  { src: sessions, kind: "video", caption: "Schedule sessions on the event agenda." },
  { src: publishSync, kind: "video", caption: "Publish: the canvas becomes bookable seat data and the venue goes on sale." },
  { src: paymentSetup, kind: "video", caption: "Configure the SkipCash payment gateway." },
  { src: guestPortalImg, caption: "Guest portal: zones, availability and pricing at a glance." },
  { src: guestPortal, kind: "video", caption: "The guest opens the live seat map with categories." },
  { src: realtimeLocking, kind: "video", caption: "Pick a seat and it locks instantly, with a hold timer over WebSocket (Pusher)." },
  { src: payment, kind: "video", caption: "Checkout with payment verified server-side." },
  { src: ticket, kind: "video", caption: "The ticket arrives with a scannable barcode." },
  { src: qrScan, kind: "video", caption: "Scan tickets at the door." },
  { src: dashboard, kind: "video", caption: "The organizer sees sales and attendance in the analytics dashboard." },
  { src: sdkDocsImg, caption: "Embeddable SDK: a documented REST API and iframe integration for third-party platforms." },
  { src: getseat1 }, { src: getseat2 }, { src: getseat3 }, { src: getseat4 }, { src: getseat5 },
];
