import React from 'react'
import NavBottom from './NavBottom';
import BackNav from './BackNav';
import CardNotification from './CardNotification';
import { RiNotification2Line } from "react-icons/ri";
import { BsCalendarWeek } from "react-icons/bs";
import { RxHome } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import Footer from '../../components/dashComponent/footer/Footer';

const Notifications = () => {
    const notifications = [
        {
          title: "Nouvelle mise à jour",
          content: "Une nouvelle mise à jour est disponible. Veuillez installer la dernière version pour bénéficier des dernières fonctionnalités.",
        },
        {
          title: "Message reçu",
          content: "Vous avez reçu un nouveau message de la part de John Doe.",
        },
        {
          title: "Événement à venir",
          content: "N'oubliez pas notre prochain événement qui aura lieu le 15 juillet. Soyez prêt !",
        },
        // Ajoutez autant d'objets de notification que nécessaire
      ];
    return (
        <div>
            <BackNav linkTo="/agriculteur/contenu" title="Notifications" />
            {notifications.map((notif, index) => (
                <CardNotification title={notif.title} content={notif.content}/>

            )) 
            }
                
                <Footer
                    data={[
                        {
                            to: "/agriculteur/contenu",
                            icon: <RxHome className="text-2xl" />,
                            nom: "Accuiel",
                        },
                        {
                            to: "/agriculteur/notifications",
                            icon: <RiNotification2Line className="text-2xl" />,
                            nom: "Notifications",
                        },
                        {
                            to: "/agriculteur/plan-de-production",
                            icon: <BsCalendarWeek className="text-2xl" />,
                            nom: "Production",
                        },
                        {
                            to: "/agriculteur/profile",
                            icon: <CgProfile className="text-2xl" />,
                            nom: "Profile",
                        },
                    ]}
                />
        </div>
    );
};

export default Notifications;