import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Styles/HistoryVRSection.module.css";

interface HistoryEvent {
  image: string;
  title: string;
  description: string;
}

const events: HistoryEvent[] = [
  {
    image: "/default/lichsuhinhthanh1.jpg",
    title: "Ngày 15/6/1990",
    description:
      "Bộ trưởng Bộ Giáo dục và Đào tạo ban hành Quyết định số 451/TCCB thành lập Viện Đào tạo mở rộng trực thuộc Trường Cán bộ quản lý đại học – Trung học chuyên nghiệp và Dạy nghề."
  },
  {
    image: "/default/lichsuhinhthanh2.jpg",
    title: "Ngày 26/7/1993",
    description:
      "Thủ Tướng Chính phủ quyết định thành lập Đại học Mở bán công TP.HCM trên cơ sở Viện Đào tạo mở rộng II, với chức năng đào tạo từ xa, đào tạo tại chỗ, và tại các điểm vệ tinh."
  },
  {
    image: "/default/lichsuhinhthanh3.jpg",
    title: "Ngày 22/6/2006",
    description:
      "Thủ Tướng Chính phủ ban hành Quyết định số 146/2006/QĐ-TTg chuyển loại hình Trường Đại học Mở bán công TP.HCM sang công lập, trực thuộc Bộ Giáo dục và Đào tạo."
  },
  {
    image: "/default/lichsuhinhthanh4.jpg",
    title: "Nghị quyết số 77/NQ-CP (2014 – 2017)",
    description:
      "Trường Đại học Mở TP.HCM được thực hiện tự chủ, tự chịu trách nhiệm về đào tạo, tổ chức nhân sự, tài chính, học bổng, đầu tư và giám sát theo Nghị quyết số 77/NQ-CP."
  },
  {
    image: "/default/lichsuhinhthanh5.jpg",
    title: "Ngày 12/6/2015",
    description:
      "Thủ tướng Chính phủ ban hành Quyết định số 850/QĐ-TTg phê duyệt Đề án thí điểm đổi mới cơ chế hoạt động của Trường Đại học Mở TP.HCM giai đoạn 2015 – 2017."
  }
];

const HistoryVRSection: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showPrintTitle, setShowPrintTitle] = useState(false);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const planesRef = useRef<THREE.Mesh[]>([]);
  const groupRef = useRef<THREE.Group | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const raycasterRef = useRef<THREE.Raycaster | null>(null);
  const mouseRef = useRef<THREE.Vector2 | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Tạo nền 360 độ
    const textureLoader = new THREE.TextureLoader();
    const sphereGeometry = new THREE.SphereGeometry(500, 60, 40);
    sphereGeometry.scale(-1, 1, 1);
    
    const panoramaTexture = textureLoader.load("/default/360-panorama.jpg", () => {
      const panoramaMaterial = new THREE.MeshBasicMaterial({
        map: panoramaTexture
      });
      const panoramaMesh = new THREE.Mesh(sphereGeometry, panoramaMaterial);
      scene.add(panoramaMesh);
    });

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 8);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.rotateSpeed = 0.8;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Group
    const group = new THREE.Group();
    scene.add(group);
    groupRef.current = group;

    const radius = 12;
    const geometry = new THREE.PlaneGeometry(4, 2.5);
    
    // Khởi tạo raycaster và mouse
    const raycaster = new THREE.Raycaster();
    raycasterRef.current = raycaster;
    const mouse = new THREE.Vector2();
    mouseRef.current = mouse;

    events.forEach((e, i) => {
      const texture = new THREE.TextureLoader().load(e.image);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 1
      });
      const plane = new THREE.Mesh(geometry, material);
      plane.userData = { index: i, title: e.title };

      const angle = (i / events.length) * Math.PI * 2;
      plane.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
      plane.lookAt(0, 0, 0);
      group.add(plane);
      planesRef.current.push(plane);
    });

    // Handle click
    const handleClick = (event: MouseEvent) => {
      if (!mountRef.current || !cameraRef.current) return;

      const rect = mountRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, cameraRef.current);
      const intersects = raycaster.intersectObjects(planesRef.current);

      if (intersects.length > 0) {
        const index = intersects[0].object.userData.index;
        console.log("Clicked on image:", events[index].title); // Debug log
        setSelectedIndex(index);
        setActiveIndex(index);
        setIsZoomed(true);
        
        // Di chuyển camera đến gần hình ảnh được chọn
        const selectedPlane = planesRef.current[index];
        const targetPosition = new THREE.Vector3();
        selectedPlane.getWorldPosition(targetPosition);
        
        // Điều chỉnh vị trí đích để camera nhìn rõ hình ảnh
        const offset = new THREE.Vector3(0, 0, 3);
        targetPosition.add(offset);
        
        // Animation di chuyển camera
        const startPosition = cameraRef.current.position.clone();
        const startTime = performance.now();
        const duration = 1000;
        
        const animateCamera = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          const easeProgress = easeInOutCubic(progress);
          
          cameraRef.current!.position.lerpVectors(startPosition, targetPosition, easeProgress);
          cameraRef.current!.lookAt(selectedPlane.position);
          
          if (progress < 1) {
            animationIdRef.current = requestAnimationFrame(animateCamera);
          } else {
            controlsRef.current!.update();
            animationIdRef.current = null;
          }
        };
        
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
        }
        animationIdRef.current = requestAnimationFrame(animateCamera);

        setShowPrintTitle(true);
        setTimeout(() => setShowPrintTitle(false), 2000);
      }
    };

    renderer.domElement.addEventListener("click", handleClick);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();

      if (selectedIndex === null) {
        group.rotation.y += 0.002;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Escape
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedIndex !== null) {
        handleExitZoom();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    const handleResize = () => {
      if (!mountRef.current || !cameraRef.current) return;
      cameraRef.current.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
      renderer.domElement.removeEventListener("click", handleClick);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const handleExitZoom = () => {
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
    }
    
    if (cameraRef.current) {
      const startPosition = cameraRef.current.position.clone();
      const targetPosition = new THREE.Vector3(0, 0, 8);
      const startTime = performance.now();
      const duration = 1000;
      
      const animateCameraBack = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeProgress = easeInOutCubic(progress);
        
        cameraRef.current!.position.lerpVectors(startPosition, targetPosition, easeProgress);
        
        if (progress < 1) {
          animationIdRef.current = requestAnimationFrame(animateCameraBack);
        } else {
          setSelectedIndex(null);
          setIsZoomed(false);
          animationIdRef.current = null;
        }
      };
      
      animationIdRef.current = requestAnimationFrame(animateCameraBack);
    } else {
      setSelectedIndex(null);
      setIsZoomed(false);
    }
  };

  return (
    <div className={styles.historyVRSection}>
      <div ref={mountRef} className={styles.canvasContainer}></div>

      {selectedIndex !== null ? (
        <div className={styles.zoomedOverlay}>
          <motion.div 
            className={styles.zoomedImageContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={events[selectedIndex].image} 
              alt={events[selectedIndex].title}
              className={styles.zoomedImage}
            />
            <div className={styles.zoomedContent}>
              <h2>{events[selectedIndex].title}</h2>
              <p>{events[selectedIndex].description}</p>
              <button className={styles.exitButton} onClick={handleExitZoom}>
                Thoát chế độ xem
              </button>
            </div>
          </motion.div>
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key="info"
            className={styles.infoBox}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
          >
            <h2>{events[activeIndex].title}</h2>
            <p>{events[activeIndex].description}</p>
          </motion.div>
        </AnimatePresence>
      )}

      {showPrintTitle && (
        <motion.div
          className={styles.printTitle}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <span>Đã chọn: {events[selectedIndex !== null ? selectedIndex : activeIndex].title}</span>
        </motion.div>
      )}

      <div className={styles.instructions}>
        <p>• Click vào hình ảnh để xem chi tiết</p>
        <p>• Kéo để xoay môi trường 360°</p>
        <p>• Nhấn ESC để thoát chế độ xem ảnh</p>
      </div>
    </div>
  );
};

export default HistoryVRSection;