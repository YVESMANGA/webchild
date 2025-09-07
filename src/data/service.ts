import { FaLaptopCode, FaShoppingCart, FaTools } from "react-icons/fa";
import { IconType } from "react-icons";

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: IconType;
  details?: string; // description longue spécifique
}

export const services: Service[] = [
  {
    slug: "site-web",
    title: "Sites vitrines",
    description: "Présentez votre entreprise avec un site moderne et responsive.",
    icon: FaLaptopCode,
    details: `
Un site vitrine est un site web conçu pour présenter votre entreprise, vos produits ou services.
Contrairement à une boutique en ligne, il ne permet pas de vendre directement en ligne, mais sert de carte de visite digitale.

Pourquoi chaque business ou professionnel a besoin d'un site vitrine ?

1. Visibilité en ligne : être trouvé facilement par vos clients potentiels.
2. Crédibilité : un site bien conçu inspire confiance.
3. Communication claire : présentez vos services, contacts, horaires, valeurs.
4. Accessibilité 24/7 : vos informations sont disponibles à tout moment.
5. Support marketing : base pour vos campagnes SEO, réseaux sociaux et emailing.

En résumé : un site vitrine est comme une vitrine physique ouverte sur Internet, pour attirer et informer vos clients.
    `,
  },
  {
    slug: "ecommerce",
    title: "Sites e-commerce",
    description: "Vendez vos produits en ligne facilement et efficacement.",
    icon: FaShoppingCart,
    details: `
Un site e-commerce est une boutique en ligne qui permet de vendre vos produits directement sur Internet.

Pourquoi chaque business a besoin d'un site e-commerce ?

1. Vente en ligne 24/7 : vos clients peuvent acheter à tout moment, même hors des horaires d'ouverture.
2. Expansion du marché : touchez des clients partout dans le pays ou à l'international.
3. Gestion simplifiée : suivez vos commandes, stocks et clients depuis un tableau de bord centralisé.
4. Marketing digital : vos campagnes publicitaires, newsletters et promotions peuvent directement renvoyer vers votre boutique.
5. Rentabilité : réduisez les coûts liés à une boutique physique tout en augmentant vos ventes.

En résumé : un site e-commerce transforme votre business pour qu'il soit disponible partout et à tout moment, tout en facilitant la gestion et le suivi des ventes.
    `,
  },
  {
    slug: "maintenance",
    title: "Maintenance & Hébergement",
    description: "Profitez d'un site toujours à jour et performant.",
    icon: FaTools,
    details: `
La maintenance et l'hébergement garantissent que votre site web reste sécurisé, rapide et opérationnel.

Pourquoi la maintenance est importante ?

1. Sécurité : protection contre les virus, piratages et failles de sécurité.
2. Performances : votre site reste rapide et fonctionnel pour tous vos visiteurs.
3. Sauvegardes automatiques : vos données sont protégées en cas de problème.
4. Mises à jour : logiciels, plugins et contenus toujours à jour.
5. Support technique : assistance disponible pour résoudre les problèmes rapidement.

En résumé : la maintenance et l'hébergement sont essentiels pour un site fiable et performant, offrant une expérience optimale à vos visiteurs tout en sécurisant vos données.
    `,
  },
];
