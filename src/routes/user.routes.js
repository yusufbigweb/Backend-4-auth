import express from "express";
import { verifyFirebaseToken } from "../middlewares/auth.middleware.js";

import { supabase } from "../../supabase.js";

const router = express.Router();

router.get(
  "/profile",
  verifyFirebaseToken,
  async (req, res) => {

    try {

      const user = req.user;

      const { data, error } =
        await supabase
          .from("users")
          .upsert(
            [
              {
                firebase_uid: user.uid,
                email: user.email,
                name: user.name,
                image: user.picture,
              },
            ],
            {
              onConflict: "firebase_uid",
            }
          );

      console.log(data);
      console.log(error);

      if(error){
        return res.status(500).json({
          error
        });
      }

      res.status(200).json({
        success: true,
        user,
      });

    } catch (error) {

      console.log(error);

      return res.status(500).json({
        error: error.message,
      });

    }
  }
);





export default router;