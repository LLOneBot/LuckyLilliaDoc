<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vitepress';

const router = useRouter();

onMounted(() => {
 router.go('/guide/introduction')
})
</script>
