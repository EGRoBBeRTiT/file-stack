import React, { Suspense } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import type { PrimitiveProps } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { Text } from 'components/Text';

const StylesCanvas = styled(Canvas)`
    width: calc(100% / 3);
    height: 100vh;
`;

const StylesCanvasContainer = styled.div`
    width: 100vw;
    height: 100vh;
    min-height: 100vh;
`;

const StylesContainer = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
`;

const ModelIl = () => {
    const { scene } = useGLTF('/Il.glb');

    const primitiveProps = { object: scene } as PrimitiveProps;

    return <primitive {...primitiveProps} />;
};

const ModelIam = () => {
    const { scene } = useGLTF('/Iam.glb');

    const primitiveProps = { object: scene } as PrimitiveProps;

    return <primitive {...primitiveProps} />;
};

const ModelIvan = () => {
    const { scene } = useGLTF('/Taz.glb');

    const primitiveProps = { object: scene } as PrimitiveProps;

    return <primitive {...primitiveProps} />;
};

export const ModelObject = () => (
    <StylesCanvasContainer>
        <Text type="title-0" as="h1" style={{ textAlign: 'center' }}>
            3D модель меня!
        </Text>
        <StylesContainer>
            <StylesCanvas>
                <Suspense fallback={null}>
                    <ambientLight />
                    <directionalLight />
                    <ModelIam />
                    <OrbitControls enablePan enableZoom enableRotate />
                </Suspense>
            </StylesCanvas>
            <StylesCanvas>
                <Suspense fallback={null}>
                    <ambientLight />
                    <directionalLight />
                    <ModelIl />
                    <OrbitControls enablePan enableZoom enableRotate />
                </Suspense>
            </StylesCanvas>
            <StylesCanvas>
                <Suspense fallback={null}>
                    <ambientLight />
                    <directionalLight />
                    <ModelIvan />
                    <OrbitControls enablePan enableZoom enableRotate />
                </Suspense>
            </StylesCanvas>
        </StylesContainer>
    </StylesCanvasContainer>
);
