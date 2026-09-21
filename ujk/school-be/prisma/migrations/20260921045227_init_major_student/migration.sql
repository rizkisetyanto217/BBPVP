-- CreateTable
CREATE TABLE `majors` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `school_id` INTEGER NULL,
    `kode_jurusan` VARCHAR(50) NOT NULL,
    `nama_jurusan` VARCHAR(100) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `majors_school_id_kode_jurusan_key`(`school_id`, `kode_jurusan`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `students` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_siswa` VARCHAR(50) NOT NULL,
    `nama_siswa` VARCHAR(255) NOT NULL,
    `alamat_siswa` TEXT NULL,
    `tgl_siswa` DATE NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `major_id` INTEGER NULL,

    UNIQUE INDEX `students_kode_siswa_key`(`kode_siswa`),
    INDEX `students_major_id_idx`(`major_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_major_id_fkey` FOREIGN KEY (`major_id`) REFERENCES `majors`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
