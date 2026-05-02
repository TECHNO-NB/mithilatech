// @ts-nocheck
"use client";

import { Mail, Search, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import GoldButton from "./GoldButton";
import axios from "axios";
import Card from "./Card";

interface Contact {
  id: number;
  fullName: string;
  phone: string;
  email: string;
  gallery: string;
  message: string;
  created_at?: string;
}

// ─── API Base ────────────────────────────────────────────────────────────────
const API = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`,
});

// ─── Contacts Panel ───────────────────────────────────────────────────────────
export default function ContactsPanel({
  addToast,
}: {
  addToast: (m: string, t?: "success" | "error") => void;
}) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Contact | null>(null);

  const token = localStorage.getItem("token");

  const fetch = async () => {
    try {
      const { data } = await API.get("/contacts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContacts(data);
    } catch {
      addToast("Failed to load contacts", "error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetch();
  }, [token]);

  const handleDelete = async (id: number) => {
    const token = localStorage.getItem("token");
    if (!confirm("Delete this contact?")) return;
    try {
      await API.delete(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      addToast("Contact deleted");
      fetch();
      setSelected(null);
    } catch {
      addToast("Delete failed", "error");
    }
  };

  const filtered = contacts.filter(
    (c) =>
      c?.fullName?.toLowerCase().includes(search.toLowerCase()) ||
      c?.email?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 24,
        }}
      >
        <div>
          <h3
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#f0ead8",
              margin: 0,
            }}
          >
            Contact Inquiries
          </h3>
          <p style={{ color: "#5a5750", fontSize: 13, marginTop: 4 }}>
            {contacts.length} total inquiries
          </p>
        </div>
      </div>

      <div style={{ position: "relative", marginBottom: 20 }}>
        <Search
          size={15}
          style={{
            position: "absolute",
            left: 12,
            top: "50%",
            transform: "translateY(-50%)",
            color: "#555",
          }}
        />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search contacts…"
          style={{
            width: "100%",
            background: "#111113",
            border: "1px solid #1e1e22",
            borderRadius: 10,
            padding: "10px 12px 10px 36px",
            fontSize: 13,
            color: "#c8c0b4",
            outline: "none",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: selected ? "1fr 1fr" : "1fr",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {loading ? (
            <div style={{ textAlign: "center", color: "#555", padding: 60 }}>
              Loading…
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ textAlign: "center", color: "#555", padding: 60 }}>
              No contacts found
            </div>
          ) : (
            filtered.map((c) => (
              <Card
                key={c.id}
                style={{
                  cursor: "pointer",
                  border:
                    selected?.id === c.id
                      ? "1px solid rgba(201,168,76,0.35)"
                      : "1px solid #1e1e22",
                  transition: "all 0.2s",
                }}
                onClick={() => setSelected(selected?.id === c.id ? null : c)}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{ display: "flex", gap: 12, alignItems: "center" }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background:
                          "linear-gradient(135deg,#c9a84c22,#c9a84c44)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#c9a84c",
                        flexShrink: 0,
                      }}
                    >
                      {c.fullName?.[0]?.toUpperCase()}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 600,
                          color: "#e8e3d9",
                        }}
                      >
                        {c.fullName}
                      </div>
                      <div
                        style={{
                          fontSize: 12.5,
                          color: "#6b6760",
                          marginTop: 2,
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                        }}
                      >
                        <Mail size={11} />
                        {c.email}
                      </div>
                      <h1> {c.message}</h1>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <span
                      style={{
                        fontSize: 11,
                        padding: "3px 9px",
                        borderRadius: 6,
                        background: "rgba(86,178,228,0.12)",
                        color: "#56b2e4",
                        border: "1px solid rgba(86,178,228,0.2)",
                        fontWeight: 500,
                      }}
                    >
                      {c.program}
                    </span>
                    <GoldButton
                      variant="danger"
                      onClick={(e) => {
                        e?.stopPropagation?.();
                        handleDelete(c.id);
                      }}
                    >
                      <Trash2 size={13} />
                    </GoldButton>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>

        {selected && (
          <Card
            style={{
              border: "1px solid rgba(201,168,76,0.2)",
              alignSelf: "flex-start",
              position: "sticky",
              top: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 700, color: "#c9a84c" }}>
                Contact Detail
              </span>
              <button
                onClick={() => setSelected(null)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#555",
                  cursor: "pointer",
                }}
              >
                <X size={16} />
              </button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                {
                  icon: <Users size={14} />,
                  label: "Name",
                  val: selected.fullName,
                },
                {
                  icon: <Mail size={14} />,
                  label: "Email",
                  val: selected.email,
                },
                {
                  icon: <Phone size={14} />,
                  label: "Phone",
                  val: selected.phone,
                },
                {
                  icon: <Wrench size={14} />,
                  label: "Program",
                  val: selected.program,
                },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{ display: "flex", gap: 12, alignItems: "center" }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: "#1a1a1e",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#c9a84c",
                      flexShrink: 0,
                    }}
                  >
                    {row.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#555",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        marginBottom: 2,
                      }}
                    >
                      {row.label}
                    </div>
                    <div style={{ fontSize: 13.5, color: "#d8d0c4" }}>
                      {row.val}
                    </div>
                  </div>
                </div>
              ))}
              <div
                style={{
                  background: "#0d0d0f",
                  borderRadius: 10,
                  padding: 14,
                  border: "1px solid #1e1e22",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: "#555",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: 8,
                  }}
                >
                  Message
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "#a09880",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {selected.message}
                </p>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
