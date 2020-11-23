import type passport from "passport";
import { Profile, Strategy as GoogleStrategy, VerifyCallback } from "passport-google-oauth20";
import { _Usuario, Usuario } from "../models/Usuario";
import { NonNullFindOptions } from "sequelize";

export default (passport: passport.PassportStatic) => {
    passport.use(new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID!!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!!,
            callbackURL: "/auth/google/callback"
        },
        async (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
            try {
                const usuario = await Usuario.findByPk(profile.id);

                if (usuario) {
                    // @ts-ignore
                    done(undefined, usuario.dataValues);
                } else {
                    const nuevoUsuario = Usuario.build({
                        UsuId: profile.id,
                        UsuNom: profile.displayName,
                        UsuFoto: profile.photos?.[0].value
                    });
                    await nuevoUsuario.save();
                    done(undefined, nuevoUsuario);
                }

            } catch (e) {
                console.error(e);
            }
        })
    );

    passport.serializeUser<_Usuario, any>((user, done) => {
        done(null, user.UsuId);
    });

    passport.deserializeUser<any, string>(async (id, done) => {
        const resultado = await Usuario.findByPk(id);
        // @ts-ignore
        done(undefined, resultado?.dataValues ?? false);
    });

};

