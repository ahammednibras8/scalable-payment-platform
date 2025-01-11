export const heroCodeSnippet = `
// Example TypeScript implementation
interface Transaction {
  id: string;
  amount: number;
  currency: string;
  status: TransactionStatus;
}

@Injectable()
class PaymentProcessor {
  async processPayment(
    tx: Transaction
  ): Promise<Result> {
    // Secure payment processing
    await this.validate(tx);
    const result = await this.
      processWithStripe(tx);
    
    // WebSocket real-time updates
    this.notifyClient(result);
    
    return result;
  }
}
`;

import { Lock, Terminal, Storage, Cloud } from '@mui/icons-material';
import { SvgIconProps } from '@mui/material';
import { FC } from 'react';

interface Feature {
  icon: FC<SvgIconProps>;
  title: string;
  description: string;
  techStack: string[];
}

export const technicalFeatures: Feature[] = [
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "OAuth 2.0 authentication with JWT tokens, role-based access control, and end-to-end encryption",
    techStack: ["OAuth 2.0", "JWT", "bcrypt", "SSL/TLS"]
  },
  {
    icon: Terminal,
    title: "Modern Stack",
    description: "Built with TypeScript and React for type-safe, maintainable code",
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
  },
  {
    icon: Storage,
    title: "Scalable Backend",
    description: "Node.js/Express.js backend with PostgreSQL for high-performance transactions",
    techStack: ["Node.js", "Express", "PostgreSQL", "Redis"]
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "Containerized deployment on Google Cloud Platform with automatic scaling",
    techStack: ["Docker", "Kubernetes", "GCP", "CI/CD"]
  }
];