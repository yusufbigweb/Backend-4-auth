import admin from "../../firebaseAdmin.js";

export const verifyFirebaseToken = async (
  req,
  res,
  next
) => {

  try {

    const token =
      req.headers.authorization?.split("Bearer ")[1];

    if (!token) {
      return res.status(401).json({
        message: "No Token",
      });
    }



    

    const decodedToken =
      await admin.auth().verifyIdToken(token);

    req.user = decodedToken;

    next();

  } catch (error) {

    console.log(error);

    return res.status(401).json({
      message: "Invalid Token",
    });

  }
};