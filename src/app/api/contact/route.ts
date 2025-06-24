import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// POST-Methode für die API definieren
export async function POST(request: NextRequest) {
  try {
    // Extrahiere die Daten aus der Anfrage
    const data = await request.json();
    const { name, email, phone, message } = data;

    // Validierung der Pflichtfelder
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Bitte alle Pflichtfelder ausfüllen." },
        { status: 400 }
      );
    }

    // Erstelle den SMTP-Transporter für Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,        // Host deines SMTP-Servers
      port: Number(process.env.SMTP_PORT), // SMTP Port (z.B. 465 für SSL)
      secure: process.env.SMTP_SECURE === "true",  // Wenn der Port 465 ist, dann true
      auth: {
        user: process.env.SMTP_USER,      // Dein SMTP-Benutzer (E-Mail)
        pass: process.env.SMTP_PASS,      // Dein SMTP-Passwort
      },
    });

    // E-Mail-Optionen definieren
    const mailOptions = {
      from: process.env.SMTP_USER,     // Absender
      replyTo: email,                  // Antwort an die Absender-E-Mail-Adresse
      to: process.env.SMTP_USER,       // E-Mail-Adresse, an die die Nachricht gesendet wird
      subject: `Neue Nachricht von ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`, // E-Mail-Inhalt
    };

    // Sende die E-Mail
    await transporter.sendMail(mailOptions);

    // Erfolgreiche Antwort zurückgeben
    return NextResponse.json(
      { message: "Mail erfolgreich gesendet!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fehler beim Verarbeiten:", error);
    // Fehlerhafte Antwort zurückgeben
    return NextResponse.json(
      { error: "Fehler beim Verarbeiten der Anfrage. Bitte versuche es später erneut." },
      { status: 500 }
    );
  }
}
