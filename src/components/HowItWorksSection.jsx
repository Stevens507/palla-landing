import { motion } from "framer-motion";
import {
  FileText,
  Package,
  Droplets,
  Cookie,
  CheckCircle2,
  Truck,
  CircleDot,
} from "lucide-react";
import catalogStepImg from "../assets/catalog-step.png";

/* ─── Shared card wrapper with gradient overlay ─────────────────────────── */
function StepCard({ title, children }) {
  return (
    <div
      className="rounded-2xl shadow-sm h-full flex flex-col overflow-hidden border border-gray-100"
      style={{
        background:
          "linear-gradient(180deg, rgba(238,241,251,0.5) 0%, rgba(255,255,255,1) 40%)",
      }}
    >
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <div className="flex-1 flex flex-col">{children}</div>
      </div>
    </div>
  );
}

/* ─── Card 1: Catalog ───────────────────────────────────────────────────── */
function CatalogCard() {
  return (
    <StepCard title="Elige tus productos.">
      <div className="flex items-center justify-center flex-1">
        <img
          src={catalogStepImg}
          alt="Catálogo mayorista con productos y precios"
          className="w-full max-w-[340px] rounded-xl shadow-md object-cover"
          loading="lazy"
        />
      </div>
    </StepCard>
  );
}

/* ─── Card 2: Order confirmation ────────────────────────────────────────── */
const orderItems = [
  { icon: Package, name: "Arroz Diana 5lb", qty: 1, price: "$18.50" },
  { icon: Droplets, name: "Aceite Mazola 1L", qty: 1, price: "$14.40" },
  { icon: Cookie, name: "Azúcar Estrella 2lb", qty: 1, price: "$9.60" },
];

function OrderCard() {
  return (
    <StepCard title="Confirmamos tu pedido.">
      {/* Receipt wrapper with shadow */}
      <div className="shadow-md rounded-sm">
        {/* Top scalloped/zigzag edge */}
        <div
          className="h-4 w-full"
          style={{
            background: `radial-gradient(circle at 10px -5px, transparent 12px, #F9F9F7 13px)`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Receipt body */}
        <div className="bg-[#F9F9F7] px-5 py-4">
          {/* Header */}
          <div className="flex items-center gap-3 mb-1">
            <div className="flex items-center justify-center w-9 h-9 rounded-md bg-gray-100">
              <FileText className="w-5 h-5 text-gray-500" />
            </div>
            <div className="border-l-2 border-gray-200 pl-3 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-gray-900">
                  Pedido #6647
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700 flex items-center gap-0.5">
                  Confirmado ✓
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-0.5">Tienda Don Ramón</p>
            </div>
          </div>

          {/* Dashed separator */}
          <div className="border-t border-dashed border-gray-300 my-3" />

          {/* Line items */}
          <div className="flex flex-col gap-3">
            {orderItems.map(({ icon: Icon, name, qty, price }) => (
              <div key={name} className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Icon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span className="text-base text-gray-700 truncate">
                    {name}
                  </span>
                  <span className="text-sm text-gray-400">×{qty}</span>
                </div>
                <span className="text-base font-semibold text-gray-900 flex-shrink-0 ml-3">
                  {price}
                </span>
              </div>
            ))}
          </div>

          {/* Dashed separator */}
          <div className="border-t border-dashed border-gray-300 my-3" />

          {/* Total */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900">Total</span>
            <span className="text-lg font-bold text-[#F05033]">$42.50</span>
          </div>
        </div>

        {/* Bottom scalloped/zigzag edge */}
        <div
          className="h-4 w-full"
          style={{
            background: `radial-gradient(circle at 10px 15px, transparent 12px, #F9F9F7 13px)`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>
    </StepCard>
  );
}

/* ─── Card 3: Delivery tracking ─────────────────────────────────────────── */
const deliverySteps = [
  {
    label: "Pedido recibido",
    time: "Hoy, 3:42pm",
    status: "done",
  },
  {
    label: "En preparación",
    time: "Hoy, 5:00pm",
    status: "done",
  },
  {
    label: "En camino",
    time: "Mañana, 7:30am",
    status: "active",
  },
  {
    label: "Entregado",
    time: "Mañana, ~9am",
    status: "pending",
  },
];

function StepDot({ status }) {
  if (status === "done") {
    return (
      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
        <CheckCircle2 className="w-4 h-4 text-white" />
      </div>
    );
  }

  if (status === "active") {
    return (
      <motion.div
        className="w-6 h-6 rounded-full bg-[#2D2687] flex items-center justify-center flex-shrink-0"
        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Truck className="w-3.5 h-3.5 text-white" />
      </motion.div>
    );
  }

  return (
    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
      <CircleDot className="w-4 h-4 text-gray-400" />
    </div>
  );
}

function DeliveryCard() {
  const completedSegments = 2; // first 2 segments are done, 3rd is in-progress
  const totalSegments = deliverySteps.length - 1;

  return (
    <StepCard title="Entrega en 24h.">
      <div className="flex flex-col gap-5">
        {/* Horizontal progress bar */}
        <div className="relative flex items-center justify-between px-1">
          {/* Background track */}
          <div className="absolute left-3 right-3 top-1/2 -translate-y-1/2 h-1 bg-gray-200 rounded-full" />

          {/* Animated filled track */}
          <motion.div
            className="absolute left-3 top-1/2 -translate-y-1/2 h-1 bg-green-500 rounded-full origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              width: `${(completedSegments / totalSegments) * 100}%`,
            }}
          />

          {/* Dots on the bar */}
          {deliverySteps.map((step) => (
            <div key={step.label} className="relative z-10">
              <StepDot status={step.status} />
            </div>
          ))}
        </div>

        {/* Step detail rows */}
        <div className="flex flex-col gap-3">
          {deliverySteps.map((step, index) => {
            const isDone = step.status === "done";
            const isActive = step.status === "active";
            const isPending = step.status === "pending";

            return (
              <motion.div
                key={step.label}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Row dot */}
                <div
                  className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                    isDone
                      ? "bg-green-500"
                      : isActive
                        ? "bg-[#2D2687]"
                        : "bg-gray-300"
                  }`}
                />

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm leading-tight ${
                      isPending
                        ? "text-gray-400"
                        : "text-gray-900 font-medium"
                    }`}
                  >
                    {step.label}
                  </p>
                  <p className="text-xs text-gray-400">{step.time}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </StepCard>
  );
}

/* ─── Main section ──────────────────────────────────────────────────────── */
export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#F4F6FA] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] font-sans">
            Así funciona
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CatalogCard />
          <OrderCard />
          <DeliveryCard />
        </div>
      </div>
    </section>
  );
}
