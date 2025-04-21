import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh gap-4">
      <div className="flex gap-4">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
      <div className="flex gap-4">
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button size="sm">Small</Button>
        <Button size="default">Default Size</Button>
        <Button size="lg">Large</Button>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" disabled>
          Disabled
        </Button>
        <Button variant="outline" asChild>
          <a href="https://github.com" target="_blank">Link Button</a>
        </Button>
        <Button className="w-32" variant="secondary" disabled>
          Processing...
        </Button>
      </div>
    </div>
  )
}

export default App
