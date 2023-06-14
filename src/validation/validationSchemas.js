import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Entrez une adresse mail valide")
        .required("Le champ mail est requis")
        .matches(
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            "Entrez une adresse email valide"
        ),
    password: Yup.string()
        .min(6, "Le mot de passe doit comporter au moin 6 aractères")
        .matches(
            /^(?=.*[!@#$%^&*])/,
            "Le mot de passe doit contenir au moins un caractère spécial"
        )
        .matches(
            /^(?=.*[0-9])/,
            "Le mot de passe doit contenir au moins un chiffre"
        )
        .required("Le mot de passe est requis"),
    name: Yup.string().min(3, "Le nom doit contenir au moin 3 lettres").required("Le nom est requis"),
    phone: Yup.string()
    .matches(/^\+.{12,}$/, "Entrez un numéro de téléphone valide")
    .required("Le numéro de téléphone est requis"),

});

// export const passwordSchema = Yup.object().shape({
//     password: Yup.string()
//         .mim(6, "Le mot de passe doit comporter au moin 6 aractères")
//         .matches(
//             /^(?=.*[!@#$%^&*])/,
//             "Le mot de passe doit contenir au moins un caractère spécial"
//         )
//         .matches(
//             /^(?=.*[a-z])/,
//             "Le mot de passe doit contenir au moins une lettre minuscule"
//         )
//         .matches(
//             /^(?=.*[A-Z])/,
//             "Le mot de passe doit contenir au moins une lettre majuscule"
//         )
//         .required("Le mot de passe est requis"),
// });
