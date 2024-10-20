import * as path from 'path';
import * as multer from 'multer';

export const multerConfig = {
  storage: multer.diskStorage({
    destination(req, file, callback) {
      // Fayllarni yuklash uchun papka
      return callback(null, './uploads');
    },
    filename(req, file, cb) {
      // Fayl nomini unikallik bilan shakllantirish
      const extName = path.extname(file.originalname);
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + '-' + uniqueSuffix + extName);
    },
  }),
  limits: {
    // Maksimal fayl hajmi (masalan, 5 MB)
    fileSize: 1024 * 1024 * 5, 
  },
  fileFilter(req, file, cb) {
    // Fayl formati filtri (masalan, faqat JPG, JPEG, PNG ruxsat etiladi)
    const allowedExtensions = ['.jpg', '.jpeg', '.png'];
    const ext = path.extname(file.originalname).toLowerCase();

    if (!allowedExtensions.includes(ext)) {
      // Fayl formati noto'g'ri bo'lsa, xatolik yuboring
      return cb(new Error('Fayl formati noto‘g‘ri. Faqat JPG, JPEG va PNG fayllar ruxsat etiladi'), false);
    }

    // Fayl to'g'ri bo'lsa, davom ettirilsin
    cb(null, true);
  },
};
