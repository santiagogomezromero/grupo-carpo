import { useState } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [, setLocation] = useLocation();
  const login = useAuth((state) => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!password) {
      setError('Por favor ingresa la contraseña');
      return;
    }

    if (login(password)) {
      setLocation('/admin');
    } else {
      setError('Contraseña incorrecta');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl border-zinc-700">
        <CardHeader className="space-y-2">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
              <span className="font-heading font-black text-3xl">C</span>
            </div>
          </div>
          <CardTitle className="text-2xl text-center font-heading">Panel de Administración</CardTitle>
          <CardDescription className="text-center">Grupo Carpo</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Contraseña de Administrador
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-zinc-100"
                autoFocus
              />
              <p className="text-xs text-muted-foreground mt-2">
                Contraseña de demostración: <code className="bg-zinc-100 px-2 py-1 rounded">carpo2024</code>
              </p>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                {error}
              </div>
            )}

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-10 font-semibold">
              Ingresar al Panel
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-zinc-200">
            <p className="text-xs text-muted-foreground text-center">
              Este es un panel de administración protegido. Solo administradores autorizados pueden acceder.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
