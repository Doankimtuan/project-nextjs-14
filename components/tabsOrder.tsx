import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import TableUserOrder from './tableUserOrder';

const TabsOrder = () => {
  return (
    <Tabs defaultValue="group_1" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="group_1">Group 1</TabsTrigger>
        <TabsTrigger value="group_2">Group 2</TabsTrigger>
      </TabsList>
      <TabsContent value="group_1">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you are done.
              asdhasidasd ashdajsdas da sdaiosdosodas dajsdjasdas djasod
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <TableUserOrder />
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="group_2">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you will be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default TabsOrder;
