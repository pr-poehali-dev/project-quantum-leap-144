import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки на бронирование кемпинга Пикник на почту владельца."""

    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()
    date = body.get("date", "").strip()
    place_type = body.get("place_type", "").strip()

    if not name or not phone:
        return {
            "statusCode": 400,
            "headers": headers,
            "body": json.dumps({"error": "Укажите имя и телефон"}),
        }

    owner_email = "kufarova1989@mail.ru"
    smtp_password = os.environ.get("SMTP_PASSWORD", "")

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Новая заявка на бронирование — {name}"
    msg["From"] = owner_email
    msg["To"] = owner_email

    html = f"""
    <html><body style="font-family:Arial,sans-serif;color:#333;max-width:600px;margin:0 auto">
      <div style="background:#2d6a2d;padding:24px;border-radius:8px 8px 0 0">
        <h2 style="color:white;margin:0">🏕️ Новая заявка — Кемпинг «Пикник»</h2>
      </div>
      <div style="background:#f9f6f0;padding:24px;border-radius:0 0 8px 8px;border:1px solid #e5ddd0">
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#666;width:140px">Имя:</td>
              <td style="padding:8px 0;font-weight:bold">{name}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Телефон:</td>
              <td style="padding:8px 0;font-weight:bold">{phone}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Дата заезда:</td>
              <td style="padding:8px 0;font-weight:bold">{date or 'не указана'}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Тип места:</td>
              <td style="padding:8px 0;font-weight:bold">{place_type or 'не указан'}</td></tr>
        </table>
        <p style="margin-top:16px;color:#888;font-size:14px">
          Заявка получена с сайта кемпинга «Пикник». Пожалуйста, перезвоните клиенту в течение 30 минут.
        </p>
      </div>
    </body></html>
    """

    msg.attach(MIMEText(html, "html", "utf-8"))

    try:
        with smtplib.SMTP_SSL("smtp.mail.ru", 465) as server:
            server.login(owner_email, smtp_password)
            server.sendmail(owner_email, owner_email, msg.as_string())
    except Exception as e:
        return {
            "statusCode": 500,
            "headers": headers,
            "body": json.dumps({"error": f"Ошибка отправки: {str(e)}"}),
        }

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"success": True, "message": "Заявка отправлена!"}),
    }
