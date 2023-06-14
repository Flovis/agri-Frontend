import React from 'react'
import NavBottom from './NavBottom';
import BackNav from './BackNav';
import CardNotification from './CardNotification';

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
                
            <NavBottom/>
        </div>
    );
};

export default Notifications;