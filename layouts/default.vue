<template>
    <div>
        <Navigation />
        <main>
            <div ref="container" container mx-auto>
                <slot />
            </div>
        </main>
        <Footer />
    </div>
</template>
