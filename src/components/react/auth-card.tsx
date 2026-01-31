import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { authClient } from "@/lib/auth/client";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

export default function AuthCard() {
  const [email, setEmail] = useState("bob@prisma.io");
  const [password, setPassword] = useState("password");
  async function handleSignUp() {
    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name: "name",
    });
    console.log({ data, error });
  }
  async function handleSignIn() {
    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });
    console.log({ data, error });
  }
  return (
    <Card className="mx-auto max-w-lg">
      <CardHeader>
        <CardTitle>Auth</CardTitle>
      </CardHeader>
      <CardContent>
        <Label>email</Label>
        <Input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label>password</Label>
        <Input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSignUp}>SignUp</Button>
        <Button onClick={handleSignIn}>SignIn</Button>
      </CardContent>
    </Card>
  );
}

export function AuthLink() {
  const [open, setOpen] = useState(false);
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    window.history.pushState({}, "", "/auth");
    setOpen(true);
  }
  function handleClose(e: boolean) {
    setOpen(e);
    window.history.pushState({}, "", "/");
  }
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogTrigger>
        <a href="/auth" onClick={handleClick} className="underline">
          Auth Card
        </a>
      </DialogTrigger>
      <DialogContent>
        <AuthCard />
      </DialogContent>
    </Dialog>
  );
}
