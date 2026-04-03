"use client";

import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
}

interface UserCardProps {
  userId: string;
}

export function UserCard({ userId }: UserCardProps) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchUser() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`/api/users/${userId}`);

        if (!res.ok) {
          const body = await res.json();
          if (!cancelled) {
            setError(body.error ?? "Something went wrong");
          }
          return;
        }

        const data: User = await res.json();
        if (!cancelled) {
          setUser(data);
        }
      } catch {
        if (!cancelled) {
          setError("Network error");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchUser();

    return () => {
      cancelled = true;
    };
  }, [userId]);

  if (loading) {
    return <p>Loading…</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      <h2>{user.name}</h2>
    </div>
  );
}
