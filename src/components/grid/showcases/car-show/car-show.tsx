'use client';

import {
  CubeCamera,
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import {
  type ComponentType,
  type ReactNode,
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Color,
  LinearEncoding,
  Mesh,
  MeshStandardMaterial,
  RepeatWrapping,
  Texture,
  TextureLoader,
  Vector3,
  Vector2,
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { cn } from '@/lib/utils';

const ASSET_BASE = '/car-show';
const TypedCubeCamera = CubeCamera as unknown as ComponentType<{
  children: (texture: Texture) => ReactNode;
  frames: number;
  resolution: number;
}>;

interface Props {
  isFullscreen?: boolean;
}

function Car() {
  const gltf = useLoader(GLTFLoader, `${ASSET_BASE}/models/car/scene.gltf`);

  useEffect(() => {
    gltf.scene.scale.set(0.005, 0.005, 0.005);
    gltf.scene.position.set(0, -0.035, 0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const wheelGroup = gltf.scene.children[0]?.children[0]?.children[0];

    [0, 2, 4, 6].forEach((index) => {
      const wheel = wheelGroup?.children[index];

      if (wheel) {
        wheel.rotation.x = t * 2;
      }
    });
  });

  return <primitive object={gltf.scene} />;
}

function Ground() {
  const [roughness, normal] = useLoader(TextureLoader, [
    `${ASSET_BASE}/textures/terrain-roughness.jpg`,
    `${ASSET_BASE}/textures/terrain-normal.jpg`,
  ]);

  useEffect(() => {
    [normal, roughness].forEach((texture) => {
      texture.wrapS = RepeatWrapping;
      texture.wrapT = RepeatWrapping;
      texture.repeat.set(5, 5);
      texture.offset.set(0, 0);
    });

    normal.encoding = LinearEncoding;
  }, [normal, roughness]);

  useFrame((state) => {
    const t = -state.clock.getElapsedTime() * 0.128;
    roughness.offset.set(0, t % 1);
    normal.offset.set(0, t % 1);
  });

  return (
    <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial
        envMapIntensity={0}
        normalMap={normal}
        normalScale={new Vector2(0.15, 0.15)}
        roughnessMap={roughness}
        dithering
        color={[0.015, 0.015, 0.015]}
        roughness={0.7}
        blur={[1000, 400]}
        mixBlur={30}
        mixStrength={80}
        mixContrast={1}
        resolution={1024}
        mirror={0}
        depthScale={0.01}
        minDepthThreshold={0.9}
        maxDepthThreshold={1}
        depthToBlurRatioBias={0.25}
        reflectorOffset={0.2}
      />
    </mesh>
  );
}

function FloatingGrid() {
  const diffuse = useLoader(
    TextureLoader,
    `${ASSET_BASE}/textures/grid-texture.png`,
  );

  useEffect(() => {
    diffuse.wrapS = RepeatWrapping;
    diffuse.wrapT = RepeatWrapping;
    diffuse.anisotropy = 4;
    diffuse.repeat.set(30, 30);
    diffuse.offset.set(0, 0);
  }, [diffuse]);

  useFrame((state) => {
    const t = -state.clock.getElapsedTime() * 0.68;
    diffuse.offset.set(0, t);
  });

  return (
    <mesh rotation-x={-Math.PI * 0.5} position={[0, 0.425, 0]}>
      <planeGeometry args={[35, 35]} />
      <meshBasicMaterial
        color={[1, 1, 1]}
        opacity={0.15}
        map={diffuse}
        alphaMap={diffuse}
        transparent
      />
    </mesh>
  );
}

interface BoxProps {
  color: [number, number, number];
}

function getInitialBoxPosition(zOffset = 0) {
  const position = new Vector3(
    (Math.random() * 2 - 1) * 3,
    Math.random() * 2.5 + 0.1,
    Math.random() * 10 + zOffset,
  );

  if (position.x < 0) {
    position.x -= 1.75;
  }

  if (position.x > 0) {
    position.x += 1.75;
  }

  return position;
}

function Box({ color }: Readonly<BoxProps>) {
  const box = useRef<Mesh>(null);
  const time = useRef(0);
  const [position, setPosition] = useState(() => getInitialBoxPosition(-5));
  const [xRotSpeed] = useState(() => Math.random());
  const [yRotSpeed] = useState(() => Math.random());
  const [scale] = useState(() => Math.pow(Math.random(), 2) * 0.5 + 0.05);

  useFrame((_state, delta) => {
    if (!box.current) {
      return;
    }

    time.current += delta * 1.2;

    const newZ = position.z - time.current;

    if (newZ < -10) {
      setPosition(getInitialBoxPosition(10));
      time.current = 0;
    }

    box.current.position.set(position.x, position.y, newZ);
    box.current.rotation.x += delta * xRotSpeed;
    box.current.rotation.y += delta * yRotSpeed;
  });

  return (
    <mesh ref={box} rotation-x={Math.PI * 0.5} scale={scale} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} envMapIntensity={0.15} />
    </mesh>
  );
}

function Boxes() {
  const boxes = useMemo(() => Array.from({ length: 100 }), []);

  return (
    <>
      {boxes.map((_, index) => (
        <Box
          key={index}
          color={index % 2 === 0 ? [0.4, 0.1, 0.1] : [0.05, 0.15, 0.4]}
        />
      ))}
    </>
  );
}

function Rings() {
  const itemsRef = useRef<Mesh[]>([]);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();

    itemsRef.current.forEach((mesh, index) => {
      const z = (index - 7) * 3.5 + ((elapsed * 0.4) % 3.5) * 2;
      const dist = Math.abs(z);
      const scale = 1 - dist * 0.04;
      let colorScale = 1;

      mesh.position.set(0, 0, -z);
      mesh.scale.set(scale, scale, scale);

      if (dist > 2) {
        colorScale = 1 - (Math.min(dist, 12) - 2) / 10;
      }

      colorScale *= 0.5;
      const material = mesh.material as MeshStandardMaterial;

      material.emissive =
        index % 2 === 1
          ? new Color(6, 0.15, 0.7).multiplyScalar(colorScale)
          : new Color(0.1, 0.7, 3).multiplyScalar(colorScale);
    });
  });

  return (
    <>
      {Array.from({ length: 14 }).map((_, index) => (
        <mesh
          key={index}
          ref={(element) => {
            if (element) {
              itemsRef.current[index] = element;
            }
          }}
          castShadow
          receiveShadow
          position={[0, 0, 0]}
        >
          <torusGeometry args={[3.35, 0.05, 16, 100]} />
          <meshStandardMaterial emissive={[4, 0.1, 0.4]} color={[0, 0, 0]} />
        </mesh>
      ))}
    </>
  );
}

function CarScene() {
  const renderCar = (texture: Texture) => (
    <>
      <Environment map={texture} />
      <Car />
    </>
  );

  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <color args={[0, 0, 0]} attach='background' />

      <TypedCubeCamera resolution={256} frames={Infinity}>
        {renderCar}
      </TypedCubeCamera>

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <Ground />
      <FloatingGrid />
      <Boxes />
      <Rings />
    </>
  );
}

export default function CarShow({ isFullscreen = false }: Readonly<Props>) {
  return (
    <div
      className={cn(
        'w-full overflow-hidden bg-black',
        isFullscreen
          ? 'h-screen'
          : 'h-[300px] rounded-xl md:h-[320px] 2xl:h-full 2xl:min-h-[220px]',
      )}
    >
      <Suspense fallback={null}>
        <Canvas shadows>
          <CarScene />
        </Canvas>
      </Suspense>
    </div>
  );
}
