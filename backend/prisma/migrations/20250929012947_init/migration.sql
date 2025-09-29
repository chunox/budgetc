-- CreateTable
CREATE TABLE "public"."Usuario" (
    "id_usuario" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "public"."Categoria" (
    "id_categoria" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "id_usuario" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id_categoria")
);

-- CreateTable
CREATE TABLE "public"."Item" (
    "id_item" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "id_categoria" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id_item")
);

-- CreateTable
CREATE TABLE "public"."Presupuesto" (
    "id_presupuesto" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_fin" TIMESTAMP(3) NOT NULL,
    "monto_total" DOUBLE PRECISION NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Presupuesto_pkey" PRIMARY KEY ("id_presupuesto")
);

-- CreateTable
CREATE TABLE "public"."PresupuestoItem" (
    "id_presupuesto_item" SERIAL NOT NULL,
    "id_presupuesto" INTEGER NOT NULL,
    "id_item" INTEGER NOT NULL,
    "monto_plan" DOUBLE PRECISION NOT NULL,
    "monto_actual" DOUBLE PRECISION NOT NULL,
    "cantidad_plan" INTEGER NOT NULL,
    "cantidad_real" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PresupuestoItem_pkey" PRIMARY KEY ("id_presupuesto_item")
);

-- CreateTable
CREATE TABLE "public"."Transaccion" (
    "id_transaccion" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "monto_total" DOUBLE PRECISION NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_presupuesto" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaccion_pkey" PRIMARY KEY ("id_transaccion")
);

-- CreateTable
CREATE TABLE "public"."TransaccionDetalle" (
    "id_detalle" SERIAL NOT NULL,
    "id_transaccion" INTEGER NOT NULL,
    "id_item" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precio_unitario" DOUBLE PRECISION NOT NULL,
    "monto" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TransaccionDetalle_pkey" PRIMARY KEY ("id_detalle")
);

-- CreateTable
CREATE TABLE "public"."ItemPrecioHistorico" (
    "id_precio" SERIAL NOT NULL,
    "id_item" INTEGER NOT NULL,
    "precio_unitario" DOUBLE PRECISION NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_fin" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ItemPrecioHistorico_pkey" PRIMARY KEY ("id_precio")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "public"."Usuario"("email");

-- AddForeignKey
ALTER TABLE "public"."Categoria" ADD CONSTRAINT "Categoria_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "public"."Usuario"("id_usuario") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "public"."Categoria"("id_categoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "public"."Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Presupuesto" ADD CONSTRAINT "Presupuesto_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "public"."Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PresupuestoItem" ADD CONSTRAINT "PresupuestoItem_id_presupuesto_fkey" FOREIGN KEY ("id_presupuesto") REFERENCES "public"."Presupuesto"("id_presupuesto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PresupuestoItem" ADD CONSTRAINT "PresupuestoItem_id_item_fkey" FOREIGN KEY ("id_item") REFERENCES "public"."Item"("id_item") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Transaccion" ADD CONSTRAINT "Transaccion_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "public"."Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Transaccion" ADD CONSTRAINT "Transaccion_id_presupuesto_fkey" FOREIGN KEY ("id_presupuesto") REFERENCES "public"."Presupuesto"("id_presupuesto") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TransaccionDetalle" ADD CONSTRAINT "TransaccionDetalle_id_transaccion_fkey" FOREIGN KEY ("id_transaccion") REFERENCES "public"."Transaccion"("id_transaccion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TransaccionDetalle" ADD CONSTRAINT "TransaccionDetalle_id_item_fkey" FOREIGN KEY ("id_item") REFERENCES "public"."Item"("id_item") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ItemPrecioHistorico" ADD CONSTRAINT "ItemPrecioHistorico_id_item_fkey" FOREIGN KEY ("id_item") REFERENCES "public"."Item"("id_item") ON DELETE RESTRICT ON UPDATE CASCADE;
