import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Server, Users, Database, Gamepad2, Cpu, Network, Zap, Shield } from "lucide-react";

export const ArchitectureOverview = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Victorian Detective Game
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Multiplayer Architecture for 2D Isometric Investigation Game with AI NPCs
        </p>
        <div className="flex justify-center gap-2 flex-wrap">
          <Badge variant="secondary">Web-Based</Badge>
          <Badge variant="secondary">Real-Time Multiplayer</Badge>
          <Badge variant="secondary">2D Isometric</Badge>
          <Badge variant="secondary">AI NPCs</Badge>
          <Badge variant="secondary">Social Deduction</Badge>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Architecture</TabsTrigger>
          <TabsTrigger value="stack">Tech Stack</TabsTrigger>
          <TabsTrigger value="rendering">2D Rendering</TabsTrigger>
          <TabsTrigger value="questions">Specifications</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-gold" />
                  Backend Architecture
                </CardTitle>
                <CardDescription>
                  Authoritative server with real-time synchronization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">Game Server (Node.js)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Authoritative game state management</li>
                    <li>• Real-time player synchronization</li>
                    <li>• AI NPC behavior orchestration</li>
                    <li>• Anti-cheat validation</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">WebSocket Layer</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Socket.io for reliable communication</li>
                    <li>• Room-based game instances</li>
                    <li>• Event-driven architecture</li>
                    <li>• Automatic reconnection handling</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gamepad2 className="h-5 w-5 text-gold" />
                  Frontend Client
                </CardTitle>
                <CardDescription>
                  React-based game client with optimized rendering
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">Game Renderer</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Pixi.js for 2D isometric rendering</li>
                    <li>• Layered sprite management</li>
                    <li>• Smooth animations & transitions</li>
                    <li>• Particle effects & lighting</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">State Management</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Redux Toolkit for game state</li>
                    <li>• Optimistic UI updates</li>
                    <li>• Rollback on server conflicts</li>
                    <li>• Local prediction for responsiveness</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-gold" />
                  Data Layer
                </CardTitle>
                <CardDescription>
                  Persistent storage and real-time data
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">PostgreSQL</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Player accounts & progression</li>
                    <li>• Game history & statistics</li>
                    <li>• Scenario definitions</li>
                    <li>• Leaderboards & achievements</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">Redis Cache</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Active game sessions</li>
                    <li>• Player presence & status</li>
                    <li>• Temporary game events</li>
                    <li>• Session-based data</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-gold" />
                  AI & Game Logic
                </CardTitle>
                <CardDescription>
                  Intelligent NPCs and dynamic scenarios
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">NPC AI System</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Behavior trees for NPC actions</li>
                    <li>• Dynamic dialogue generation</li>
                    <li>• Believable routine patterns</li>
                    <li>• Player interaction responses</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">Scenario Engine</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Procedural scenario generation</li>
                    <li>• Dynamic clue placement</li>
                    <li>• Adaptive difficulty scaling</li>
                    <li>• Event-driven story progression</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="stack" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="text-accent">Frontend Stack</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">React 18</span>
                  <Badge variant="secondary">✓ Current</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">TypeScript</span>
                  <Badge variant="secondary">✓ Current</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Pixi.js</span>
                  <Badge variant="outline">Recommended</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Redux Toolkit</span>
                  <Badge variant="outline">Add</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Socket.io Client</span>
                  <Badge variant="outline">Add</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Framer Motion</span>
                  <Badge variant="outline">Optional</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="text-accent">Backend Stack</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Node.js + Express</span>
                  <Badge variant="outline">Recommended</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Socket.io</span>
                  <Badge variant="outline">Required</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">PostgreSQL</span>
                  <Badge variant="outline">Recommended</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Redis</span>
                  <Badge variant="outline">Cache Layer</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Prisma ORM</span>
                  <Badge variant="outline">Optional</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">JWT Auth</span>
                  <Badge variant="outline">Authentication</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="text-accent">DevOps & Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Docker</span>
                  <Badge variant="outline">Deployment</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Nginx</span>
                  <Badge variant="outline">Load Balancer</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">PM2</span>
                  <Badge variant="outline">Process Manager</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">WebRTC</span>
                  <Badge variant="outline">Voice Chat</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Prometheus</span>
                  <Badge variant="outline">Monitoring</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">GitHub Actions</span>
                  <Badge variant="outline">CI/CD</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-gold" />
                Alternative Stack Considerations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-accent mb-2">High-Scale Alternative</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Go backend for better performance</li>
                    <li>• WebAssembly for game logic</li>
                    <li>• Kubernetes for orchestration</li>
                    <li>• CDN for asset delivery</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Rapid Prototype</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Firebase for backend services</li>
                    <li>• Supabase for real-time features</li>
                    <li>• Vercel for frontend deployment</li>
                    <li>• Simple MongoDB for data</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rendering" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-gold" />
                  2D Isometric Rendering
                </CardTitle>
                <CardDescription>
                  Octopath Traveler 2 style visuals
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">Pixi.js Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• WebGL-accelerated 2D rendering</li>
                    <li>• Efficient sprite batching</li>
                    <li>• Custom shaders for lighting effects</li>
                    <li>• Multi-layer depth sorting</li>
                    <li>• Particle systems for ambiance</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">HD-2D Techniques</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• High-resolution sprites with depth</li>
                    <li>• Dynamic lighting and shadows</li>
                    <li>• Depth-of-field blur effects</li>
                    <li>• Atmospheric particle effects</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Network className="h-5 w-5 text-gold" />
                  Asset Pipeline
                </CardTitle>
                <CardDescription>
                  Optimized content delivery
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">Sprite Management</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Texture atlases for performance</li>
                    <li>• Progressive loading of assets</li>
                    <li>• Level-of-detail for distant objects</li>
                    <li>• Memory-efficient sprite pooling</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">Generation Tools</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• AI-assisted texture generation</li>
                    <li>• Procedural animation blending</li>
                    <li>• Dynamic weather & time effects</li>
                    <li>• Modular character systems</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle>Rendering Performance Targets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-gold">60 FPS</div>
                  <div className="text-sm text-muted-foreground">Target framerate for smooth gameplay</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-gold">&lt;100ms</div>
                  <div className="text-sm text-muted-foreground">Network latency for real-time interactions</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-gold">&lt;3s</div>
                  <div className="text-sm text-muted-foreground">Initial asset loading time</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="questions" className="space-y-6">
          <Card className="border-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gold" />
                Finalized Technical Specifications
              </CardTitle>
              <CardDescription>
                Architecture tailored for 20-player real-time multiplayer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-primary mb-3">✓ Scale Requirements</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex justify-between">
                        <span>Players per game:</span>
                        <Badge variant="secondary">20 concurrent</Badge>
                      </li>
                      <li className="flex justify-between">
                        <span>Target platform:</span>
                        <Badge variant="secondary">Web desktop</Badge>
                      </li>
                      <li className="flex justify-between">
                        <span>Server architecture:</span>
                        <Badge variant="secondary">Single instance</Badge>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                    <h4 className="font-semibold text-secondary mb-3">⚡ Performance Targets</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex justify-between">
                        <span>Target latency:</span>
                        <Badge variant="outline">&lt;100ms</Badge>
                      </li>
                      <li className="flex justify-between">
                        <span>Server tick rate:</span>
                        <Badge variant="outline">60 TPS</Badge>
                      </li>
                      <li className="flex justify-between">
                        <span>Client render:</span>
                        <Badge variant="outline">60 FPS</Badge>
                      </li>
                      <li className="flex justify-between">
                        <span>Memory per player:</span>
                        <Badge variant="outline">~50MB</Badge>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <h4 className="font-semibold text-accent mb-3">🎮 Feature Set</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex justify-between">
                        <span>Voice chat:</span>
                        <Badge variant="destructive">Not needed</Badge>
                      </li>
                      <li className="flex justify-between">
                        <span>Spectator mode:</span>
                        <Badge variant="secondary">✓ Included</Badge>
                      </li>
                      <li className="flex justify-between">
                        <span>Private rooms:</span>
                        <Badge variant="destructive">Not needed</Badge>
                      </li>
                      <li className="flex justify-between">
                        <span>Anti-cheat:</span>
                        <Badge variant="destructive">Not required</Badge>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gold/10 rounded-lg border border-gold/20">
                    <h4 className="font-semibold text-gold mb-3">🔧 Development</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex justify-between">
                        <span>Timeline:</span>
                        <Badge variant="outline">No constraints</Badge>
                      </li>
                      <li className="flex justify-between">
                        <span>Game mode:</span>
                        <Badge variant="secondary">Real-time</Badge>
                      </li>
                      <li className="flex justify-between">
                        <span>Hosting:</span>
                        <Badge variant="outline">Flexible</Badge>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Network Architecture for 20 Players */}
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-primary">Optimized Network Architecture</CardTitle>
                  <CardDescription>Designed specifically for 20-player capacity</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-2">20Hz</div>
                      <div className="text-sm text-muted-foreground">Position updates</div>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="text-2xl font-bold text-secondary mb-2">1KB/s</div>
                      <div className="text-sm text-muted-foreground">Per player bandwidth</div>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="text-2xl font-bold text-accent mb-2">20KB/s</div>
                      <div className="text-sm text-muted-foreground">Total server load</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="font-semibold mb-2">Message Types & Frequency</h5>
                      <ul className="text-sm space-y-1">
                        <li>• <code>PLAYER_MOVE</code> - 20Hz per player</li>
                        <li>• <code>NPC_UPDATE</code> - 10Hz batch updates</li>
                        <li>• <code>ITEM_INTERACT</code> - Event-driven</li>
                        <li>• <code>CHAT_MESSAGE</code> - On demand</li>
                        <li>• <code>VOTE_CAST</code> - Phase-based</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Optimization Techniques</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Delta compression for state updates</li>
                        <li>• Interest management (viewport culling)</li>
                        <li>• Message batching & prioritization</li>
                        <li>• Spectator-specific data streams</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Spectator Mode Details */}
              <Card className="border-accent/20 bg-accent/5">
                <CardHeader>
                  <CardTitle className="text-accent">Spectator Mode Implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2">Spectator Features</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Full game state visibility</li>
                        <li>• Free camera movement</li>
                        <li>• Player role information overlay</li>
                        <li>• Evidence tracking panel</li>
                        <li>• Chat log with timestamps</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Technical Implementation</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Separate WebSocket channel</li>
                        <li>• Read-only game state updates</li>
                        <li>• Optimized rendering for overview</li>
                        <li>• No interaction with game objects</li>
                        <li>• Delay buffer for fairness (optional)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          <div className="flex gap-4 justify-center">
            <Button variant="victorian" size="lg">
              Begin Implementation Planning
            </Button>
            <Button variant="gold" size="lg">
              Setup Development Environment
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};