"use client";

import { useEffect, useRef } from "react";
import { SectionHeading } from "@/components/section-heading";

const PRODUCER_IDS = ["VN", "IN", "CN", "ID", "BD", "TH"];
const HUB_IDS = ["AE", "SG", "NL", "DE", "US"];
const CONSUMER_IDS = ["GB", "FR", "CA", "AU", "JP", "IT", "ES", "SE", "PL", "KR"];

const COUNTRY_NAMES: Record<string, string> = {
  VN: "Vietnam",
  IN: "India",
  CN: "China",
  ID: "Indonesia",
  BD: "Bangladesh",
  TH: "Thailand",
  AE: "UAE",
  SG: "Singapore",
  NL: "Netherlands",
  DE: "Germany",
  US: "United States",
  GB: "United Kingdom",
  FR: "France",
  CA: "Canada",
  AU: "Australia",
  JP: "Japan",
  IT: "Italy",
  ES: "Spain",
  SE: "Sweden",
  PL: "Poland",
  KR: "South Korea",
};

const FLOW_DATA = [
  { sourceId: "VN", targetId: "SG", value: 280 },
  { sourceId: "VN", targetId: "NL", value: 180 },
  { sourceId: "IN", targetId: "AE", value: 220 },
  { sourceId: "IN", targetId: "DE", value: 160 },
  { sourceId: "CN", targetId: "US", value: 320 },
  { sourceId: "CN", targetId: "SG", value: 200 },
  { sourceId: "ID", targetId: "SG", value: 150 },
  { sourceId: "ID", targetId: "AU", value: 90 },
  { sourceId: "BD", targetId: "DE", value: 120 },
  { sourceId: "BD", targetId: "NL", value: 100 },
  { sourceId: "TH", targetId: "AE", value: 80 },
  { sourceId: "TH", targetId: "US", value: 110 },
  { sourceId: "SG", targetId: "JP", value: 140 },
  { sourceId: "SG", targetId: "AU", value: 100 },
  { sourceId: "AE", targetId: "GB", value: 130 },
  { sourceId: "AE", targetId: "FR", value: 90 },
  { sourceId: "NL", targetId: "GB", value: 110 },
  { sourceId: "NL", targetId: "SE", value: 70 },
  { sourceId: "DE", targetId: "PL", value: 85 },
  { sourceId: "DE", targetId: "IT", value: 75 },
  { sourceId: "US", targetId: "CA", value: 160 },
  { sourceId: "US", targetId: "KR", value: 95 },
  { sourceId: "US", targetId: "ES", value: 60 },
];

export function SupplyChainGlobe() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    let root: import("@amcharts/amcharts5").Root | undefined;
    let disposed = false;

    async function init() {
      const am5 = await import("@amcharts/amcharts5");
      const am5map = await import("@amcharts/amcharts5/map");
      const am5themes_Animated = (
        await import("@amcharts/amcharts5/themes/Animated")
      ).default;
      const am5geodata_worldLow = (
        await import("@amcharts/amcharts5-geodata/worldLow")
      ).default;

      if (disposed || !chartRef.current) return;

      root = am5.Root.new(chartRef.current);
      root._logo?.dispose();

      // Site theme: navy + orange
      const brand = am5.color(0xf97316);
      const brandDark = am5.color(0xea580c);
      const brandSoft = am5.color(0xfdba74);
      const ink = am5.color(0x0b1220);
      const mist = am5.color(0xf7f8fb);
      const land = am5.color(0xeef1f6);
      const producerFill = am5.color(0xf97316);
      const hubFill = am5.color(0x0b1220);
      const consumerFill = am5.color(0xfdba74);

      const siteTheme = am5.Theme.new(root);
      siteTheme.rule("InterfaceColors").setAll({
        primaryButton: brand,
        primaryButtonHover: brandDark,
        primaryButtonDown: brandDark,
        primaryButtonActive: brandSoft,
        primaryButtonText: am5.color(0xffffff),
        secondaryButton: mist,
        secondaryButtonHover: am5.color(0xdfe8ec),
        secondaryButtonDown: brandSoft,
        secondaryButtonText: ink,
        background: mist,
        text: ink,
      });

      root.setThemes([am5themes_Animated.new(root), siteTheme]);

      root.container.set(
        "background",
        am5.Rectangle.new(root, {
          fill: mist,
          fillPattern: am5.GrainPattern.new(root, {
            density: 0.35,
            maxOpacity: 0.05,
            colors: [am5.color(0x000000)],
          }),
        })
      );

      const chart = root.container.children.push(
        am5map.MapChart.new(root, {
          panX: "rotateX",
          panY: "rotateY",
          projection: am5map.geoOrthographic(),
          rotationX: -15,
          rotationY: -20,
          minZoomLevel: 0.5,
          zoomLevel: 0.9,
        })
      );

      const bgSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
      bgSeries.mapPolygons.template.setAll({
        fill: am5.color(0xe8ebf0),
        fillOpacity: 1,
        strokeOpacity: 0,
      });
      bgSeries.data.push({
        geometry: am5map.getGeoRectangle(90, 180, -90, -180),
      });

      const graticuleSeries = chart.series.push(
        am5map.GraticuleSeries.new(root, {})
      );
      graticuleSeries.mapLines.template.setAll({
        stroke: brand,
        strokeOpacity: 0.12,
        strokeWidth: 0.5,
      });

      const polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: am5geodata_worldLow,
        })
      );
      polygonSeries.mapPolygons.template.setAll({
        fill: land,
        stroke: brandSoft,
        strokeWidth: 0.5,
        strokeOpacity: 0.45,
      });

      polygonSeries.events.on("datavalidated", () => {
        am5.array.each(polygonSeries.dataItems, (di) => {
          const id = di.get("id");
          const polygon = di.get("mapPolygon");
          if (!id || !polygon) return;
          if (PRODUCER_IDS.includes(id)) {
            polygon.setAll({ fill: producerFill });
          } else if (HUB_IDS.includes(id)) {
            polygon.setAll({ fill: hubFill });
          } else if (CONSUMER_IDS.includes(id)) {
            polygon.setAll({ fill: consumerFill });
          }
        });
      });

      const sankeySeries = chart.series.push(
        am5map.MapSankeySeries.new(root, {
          polygonSeries,
          maxWidth: 2,
          controlPointDistance: 0.4,
          resolution: 60,
          nodePadding: 0.3,
        })
      );

      sankeySeries.mapPolygons.template.setAll({
        fill: brand,
        fillOpacity: 0.6,
        strokeOpacity: 0,
        tooltipText: "{sourceNode.name} → {targetNode.name}\n{value} shipments",
      });

      sankeySeries.nodes.mapPolygons.template.setAll({
        fill: ink,
        stroke: brandSoft,
        strokeWidth: 1.5,
        fillOpacity: 0.95,
        strokeOpacity: 1,
        tooltipText: "{name}\n{sum} shipments",
      });

      sankeySeries.bullets.push(() =>
        am5.Bullet.new(root!, {
          locationX: 0,
          autoRotate: true,
          sprite: am5.Circle.new(root!, {
            radius: 2.4,
            fill: brandDark,
            stroke: brandSoft,
            strokeWidth: 0.6,
            centerX: am5.p50,
            centerY: am5.p50,
            visible: false,
          }),
        })
      );

      sankeySeries.data.setAll(FLOW_DATA);

      sankeySeries.events.on("datavalidated", () => {
        am5.array.each(sankeySeries.nodes.dataItems, (di) => {
          const id = di.get("id");
          if (id && COUNTRY_NAMES[id]) {
            di.set("name", COUNTRY_NAMES[id]);
          }
        });

        am5.array.each(sankeySeries.dataItems, (dataItem) => {
          const bullets = dataItem.bullets;
          if (!bullets) return;
          am5.array.each(bullets, (bullet) => {
            const randomDur = 3000 + Math.random() * 3000;
            const delay = Math.random() * randomDur;
            window.setTimeout(() => {
              if (disposed) return;
              const sprite = bullet.get("sprite");
              if (sprite) sprite.set("visible", true);
              bullet.animate({
                key: "locationX",
                from: 0,
                to: 1,
                duration: randomDur,
                easing: am5.ease.linear,
                loops: Infinity,
              });
            }, delay);
          });
        });
      });

      const titleCont = chart.children.push(
        am5.Container.new(root, {
          layout: root.verticalLayout,
          x: am5.p50,
          centerX: am5.p50,
          y: am5.p100,
          centerY: am5.p100,
          position: "absolute",
          paddingBottom: 16,
        })
      );

      titleCont.children.push(
        am5.Label.new(root, {
          text: "Just A Click Global Network",
          fontSize: 16,
          fontWeight: "600",
          fill: ink,
          fontFamily: "Montserrat, Arial, sans-serif",
          x: am5.p50,
          centerX: am5.p50,
        })
      );

      titleCont.children.push(
        am5.Label.new(root, {
          text: "Manufacturing → Hubs → Markets",
          fontSize: 11,
          fill: brandDark,
          fontFamily: "Montserrat, Arial, sans-serif",
          x: am5.p50,
          centerX: am5.p50,
        })
      );

      const switchCont = chart.children.push(
        am5.Container.new(root, {
          layout: root.horizontalLayout,
          x: 20,
          y: 24,
        })
      );

      switchCont.children.push(
        am5.Label.new(root, {
          centerY: am5.p50,
          text: "Globe",
          fill: ink,
          fontSize: 12,
          fontFamily: "Montserrat, Arial, sans-serif",
        })
      );

      const switchButton = switchCont.children.push(
        am5.Button.new(root, {
          themeTags: ["switch"],
          centerY: am5.p50,
          icon: am5.Circle.new(root, { themeTags: ["icon"] }),
        })
      );

      const easing = am5.ease.inOut(am5.ease.cubic);
      const duration = 1500;
      const fadeDuration = 300;

      function zoomToGlobe() {
        chart.set("projection", am5map.geoOrthographic());
        chart.set("panX", "rotateX");
        chart.set("panY", "rotateY");
        chart.animate({
          key: "rotationX",
          to: -15,
          duration,
          easing,
        });
        chart.animate({
          key: "rotationY",
          to: -20,
          duration,
          easing,
        });
        bgSeries.mapPolygons.template.set("fillOpacity", 1);
        chart.set("minZoomLevel", 0.9);
        chart.animate({ key: "zoomLevel", to: 0.9, duration, easing });
      }

      function zoomToMap() {
        chart.set("projection", am5map.geoMercator());
        chart.set("panX", "translateX");
        chart.set("panY", "translateY");
        chart.animate({ key: "rotationX", to: 0, duration, easing });
        chart.animate({ key: "rotationY", to: 0, duration, easing });
        bgSeries.mapPolygons.template.set("fillOpacity", 0);
        chart.set("minZoomLevel", 1);
        chart.animate({ key: "zoomLevel", to: 1.7, duration, easing });
      }

      switchButton.on("active", () => {
        chart.goHome(duration);
        window.setTimeout(() => {
          chart.seriesContainer.animate({
            key: "opacity",
            to: 0,
            duration: fadeDuration,
          });
        }, duration - fadeDuration);
        window.setTimeout(() => {
          if (switchButton.get("active")) zoomToMap();
          else zoomToGlobe();
          chart.seriesContainer.animate({
            key: "opacity",
            to: 1,
            duration: fadeDuration,
          });
        }, duration);
      });

      switchCont.children.push(
        am5.Label.new(root, {
          centerY: am5.p50,
          text: "Map",
          fill: ink,
          fontSize: 12,
          fontFamily: "Montserrat, Arial, sans-serif",
        })
      );

      const zoomControl = chart.set(
        "zoomControl",
        am5map.ZoomControl.new(root, {})
      );
      zoomControl.homeButton.set("visible", true);

      let rotationAnimation: { stop: () => void } | null = chart.animate({
        key: "rotationX",
        from: -15,
        to: -15 + 360,
        duration: 120000,
        loops: Infinity,
        easing: am5.ease.linear,
      });

      chart.chartContainer.events.on("pointerdown", () => {
        if (rotationAnimation) {
          rotationAnimation.stop();
          rotationAnimation = null;
        }
      });

      chart.appear(1000, 100);
    }

    init();

    return () => {
      disposed = true;
      root?.dispose();
    };
  }, []);

  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgb(249_115_22_/_0.12),transparent_45%)]" />
      <div className="section-shell relative">
        <SectionHeading
          title="Global"
          accent="Supply Network"
          description="Follow how Just A Click connects manufacturers, logistics hubs, and markets worldwide — design to delivery in one visible network."
        />

        <div className="mb-6 flex flex-wrap gap-4 text-sm">
          <span className="inline-flex items-center gap-2 text-muted-foreground">
            <span className="size-3 rounded-sm bg-brand" /> Manufacturing
          </span>
          <span className="inline-flex items-center gap-2 text-muted-foreground">
            <span className="size-3 rounded-sm bg-navy" /> Logistics hubs
          </span>
          <span className="inline-flex items-center gap-2 text-muted-foreground">
            <span className="size-3 rounded-sm bg-[#fdba74]" /> Markets
          </span>
        </div>

        <div className="surface-panel overflow-hidden">
          <div
            ref={chartRef}
            className="h-[70vh] min-h-[420px] w-full max-h-[720px]"
          />
        </div>
      </div>
    </section>
  );
}
