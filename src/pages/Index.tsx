const Index = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0d2a5c',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '16px',
        padding: '40px 32px',
        maxWidth: '420px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
      }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>💳</div>
        <h1 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#1a1a2e',
          margin: '0 0 12px',
        }}>Finalize Seu Pagamento</h1>
        <p style={{
          color: '#555',
          fontSize: '14px',
          lineHeight: '1.6',
          margin: '0 0 20px',
        }}>
          Para garantir uma compra segura e sem complicações, é necessário pagar a <strong>Taxa Antifraude</strong>.
        </p>
        <div style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#1a1a2e',
          margin: '0 0 24px',
        }}>
          Taxa Antifraude: R$15,90
        </div>
        <a
          href="https://go.sharkpayments.com.br/evthqyo3a3"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: '#0d2a5c',
            color: '#fff',
            padding: '14px 40px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
            marginBottom: '24px',
          }}
        >
          Pagar Agora
        </a>
        <div style={{
          background: '#e8f4fd',
          borderRadius: '8px',
          padding: '12px',
          color: '#0d6efd',
          fontWeight: '600',
          fontSize: '14px',
          marginBottom: '12px',
        }}>
          Compra protegida com segurança garantida!
        </div>
        <p style={{
          color: '#888',
          fontSize: '12px',
          margin: 0,
        }}>
          A taxa garante a segurança do seu pagamento e uma entrega sem problemas.
        </p>
      </div>
    </div>
  );
};

export default Index;
