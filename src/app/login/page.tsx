"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    setMessage("");
    const { error, data } = await supabase.auth.signInWithOtp({
      email,
    });

    console.log({
      error,
      data,
    });

    if (error) setMessage(error.message);
    else {
      router.push("/login/verify?to=" + email);
    }
    setLoading(false);
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <Card className="w-md ">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            type="phone"
            placeholder="phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {message && (
            <div className="bg-destructive/15 text-destructive text-sm p-2 rounded-md">
              {message}
            </div>
          )}

          <Button type="submit" disabled={loading} onClick={handleLogin}>
            Get OTP
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
